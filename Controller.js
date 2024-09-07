const express = require('express')
const bodyParser= require('body-parser')
const cors = require('cors')

let app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

let port= process.env.PORT || 3000
app.listen(port,(req,resp)=>{
        console.log('Nosso servidor rodando')
})

 
app.post('/create', async(req,resp)=>{

    
})