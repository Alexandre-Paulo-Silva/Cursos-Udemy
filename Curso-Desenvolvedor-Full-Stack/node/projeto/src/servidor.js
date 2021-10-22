const porta = 3003
const express = require('express') //importando

const app = express() //instanciando
app.get('/produtos', (req, res, next) => {
        res.send({ nome: 'Notebook', preco: 123.45 }) //vai converter para JSON
    }) //teste

app.listen(porta, () => {
    console.log(`servido executando na porta: ${porta}`)
})