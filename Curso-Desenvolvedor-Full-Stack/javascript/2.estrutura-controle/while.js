function aleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)

}

let opt = 0

while (opt != -1) {

    opt = aleatorio(-1, 10)
    console.log(`Opcao escolhida foi ${opt}.`)
}

console.log('Ate a proxima')