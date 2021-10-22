const imprimir = function(nota) { //funcao imprimir resultado com if else
    if (nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimir(10) //chamando a funcao ja passando o paramento
imprimir('epa') // cuidado javascrip  e uma liguagem fracanente tipada