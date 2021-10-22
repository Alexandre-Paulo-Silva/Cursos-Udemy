const fs = require('fs')

//lendo arquivo sicrono

const caminho = __dirname + '/arquivo.json'


const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)


//leitura assicrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json') //lendo os arquivos da pasta 
console.log(config.db)

fs.readdir(__dirname, (err, aquivos) => {

    console.log('Conteudo da pasta ...')
    console.log(aquivos)

})