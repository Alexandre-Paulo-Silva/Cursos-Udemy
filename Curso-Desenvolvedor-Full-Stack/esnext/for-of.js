// o for off percorre em elementos

for(let letras of "alexandre"){
    console.log(letras)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for(let i in assuntosEcma){  //o for in percorre pelos indices
    console.log(i)
}

for(let assunto of assuntosEcma){ //o for of percorre pelos arrays das letras
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for(let assunto of assuntosMap){
    console.log(assunto)
}

for(let chave of assuntosMap.keys()){
    console.log(chave)
}

for(let valor of assuntosMap.values()){
    console.log(valor)

}

for(let [ch, vl] of assuntosMap.entries()){

    console.log(ch, vl)
}

const s = new  Set(['a','b','c'])
for(let letra of s){
    console.log(letra)
}