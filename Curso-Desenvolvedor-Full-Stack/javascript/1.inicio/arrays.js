//vetores 

let valores = [7.7, 7.9, 9.2];

console.log(valores[0], valores[2]);

console.log(valores[4]);

valores[4] = 10;

console.log(valores);

console.log(valores.length) // conta quanto arrays tem numa variavel 

valores.push({ id: 3 }, false, null, 'teste'); // valores booleanos

console.log(valores);

console.log(valores.pop());

delete valores[0] //deleta valores do arrays
console.log(valores);

console.log(typeof valores); //um Array e do tipo objeto