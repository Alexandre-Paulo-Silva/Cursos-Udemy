const imprir = function(nota) {

    switch (Math.floor(nota)) { //escolha
        case 10: //caso
            console.log('Quadro de Honra')
            break
        case 9:
            console.log('Aprovado')
            break

        case 6, 7:
            console.log('Aprovado')
            break
        case 5, 4, 3, 2, 1:
            console.log('Aprovado')
            break
            console.log('Reprovado')
        default:

            console.log('nota invalida')
            break
    }
}

imprir(7)
imprir(10)
imprir(20)
imprir(-1)
imprir('')
imprir('erro')
imprir(11)
imprir(6, 55)