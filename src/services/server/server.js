const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

// Inicialize o express app
const app = express();

// Use CORS corretamente
app.use(cors());

// Defina o bodyParser para JSON
app.use(bodyParser.json());

const port = 3000;


const db = new sqlite3.Database('./qrCodes.db', (err) => {
  if (err) {
    console.error('Erro ao conectar ao SQLite:', err);
  } else {
    console.log('Conectado ao SQLite.');
  }
});


db.run(`CREATE TABLE IF NOT EXISTS qrCodes (id INTEGER PRIMARY KEY, code TEXT)`);


app.post('/api/qrcode', (req, res) => {
  const { qrCode } = req.body;

  if (!qrCode) {
    return res.status(400).json({ error: 'QR Code é necessário' });
  }

  db.run(`INSERT INTO qrCodes (code) VALUES (?)`, [qrCode], function (err) {
    if (err) {
      return res.status(500).json({ error: 'Erro ao inserir no banco de dados' });
    }
    res.status(200).json({ message: 'QR Code salvo com sucesso', id: this.lastID });
  });
});

app.get('/api/qrcodes', (req, res) => {
  db.all(`SELECT * FROM qrCodes`, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao buscar no banco de dados' });
    }
    res.status(200).json({ qrcodes: rows });
  });
});



app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
