//ler o conteudo do arquivo dados.txt

const fs = require('fs')
const path = require('path')


function lerArquivo(caminho) {

	return new Promise(resolve => {

		fs.readFile(caminho, function(_, conteudo){

			resolve(conteudo.toString())
		})
		console.log('Depois de ler')
	})
}


const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
		.then(conteudo => conteudo.split('\n'))
		.then(linhas => console.log(linhas.length)) //conta a quantidade de linhas

		