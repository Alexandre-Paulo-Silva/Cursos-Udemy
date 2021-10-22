const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'; //operandor ternario

const resultado2 = nota1 => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado';
}

console.log(resultado(7.1));
console.log(resultado(6.1));