// funcao sem retorno
console.log("Funcao sem retorno");

function imprmirSoma(a, b) {
    console.log(a + b);

};

imprmirSoma(2, 3);

imprmirSoma(2);

imprmirSoma(2, 10, 4, 5, 6, 7, 8);


// funcao com retono
console.log("Funcao com retorno");

function soma(a, b = 0) {
    return a + b;
};

console.log(soma(2, 3));