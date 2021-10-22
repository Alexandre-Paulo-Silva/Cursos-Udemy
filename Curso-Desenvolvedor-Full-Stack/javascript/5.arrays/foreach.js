const aprovados = ['ale', 'aldo', 'daniel', 'raquel']
aprovados.forEach(function(nome, indice) {
    console.log(`${indice+1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibiraprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibiraprovados)