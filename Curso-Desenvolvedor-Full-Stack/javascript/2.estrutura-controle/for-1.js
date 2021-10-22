let cont = 1

while (cont <= 10) {

    console.log(`contador = ${cont}`)
    cont = cont + 1 //ou cont++


}

for (let i = 1; i >= 10; i++) {
    console.log(`contador = ${i}`)

}

const notas = [6.7, 7.4, 9.8, 7.7]
for (let a = 0; a < notas.length; a++) { //percorrendo o array com lentgth e o for
    console.log(`Nota = ${notas}`)
}