function aleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)

}

let opt = 0

do {

    opt = aleatorio(-1, 10)
    console.log(`Opcao escolhida foi ${opt}.`)
} while (opt != -1)

console.log('Ate a proxima')