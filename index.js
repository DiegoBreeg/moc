const escreve = require('./escreve')
const express = require("express")

const app = express()

app.use(express.json())

app.use(express.static('./public'))


app.post("/dados", (req, res) =>{
    escreve(req.body)
   return res.status(200).json({mensagem: req.body})
})


app.listen(3000, (req, res) => {
    console.log("Servidor rodando")
})