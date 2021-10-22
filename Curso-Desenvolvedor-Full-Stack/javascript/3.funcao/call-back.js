const frabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {

    console.log(`${indice+1}. ${nome}`)

}

frabricantes.forEach(imprimir) //chamando a funcao de volta
frabricantes.forEach(frabricante => console.log(frabricante)) // arrow function