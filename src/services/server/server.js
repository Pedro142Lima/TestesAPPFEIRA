const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// Middleware para processar dados em JSON
app.use(bodyParser.json());

// Conexão com o banco de dados SQLite
const db = new sqlite3.Database('./qrCodes.db', (err) => {
  if (err) {
    console.error('Erro ao conectar ao SQLite:', err);
  } else {
    console.log('Conectado ao SQLite.');
  }
});

// Criar a tabela de QR Codes se não existir
db.run(`CREATE TABLE IF NOT EXISTS qrCodes (id INTEGER PRIMARY KEY, code TEXT)`);

// Rota para receber o QR Code
app.post('/api/qrcode', (req, res) => {
  const { qrCode } = req.body;

  if (!qrCode) {
    return res.status(400).json({ error: 'QR Code é necessário' });
  }

  // Inserir o QR Code no banco de dados
  db.run(`INSERT INTO qrCodes (code) VALUES (?)`, [qrCode], function (err) {
    if (err) {
      return res.status(500).json({ error: 'Erro ao inserir no banco de dados' });
    }
    res.status(200).json({ message: 'QR Code salvo com sucesso', id: this.lastID });
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
