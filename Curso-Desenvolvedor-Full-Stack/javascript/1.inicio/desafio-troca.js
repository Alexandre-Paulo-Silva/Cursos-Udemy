/* troca de valores entre variaveis usando uma variavel axiliar */

let a = 7;
let b = 94;
let ax = 0;

ax = a;
a = b;
b = ax;


console.log(a);
console.log(b);

console.log(a, b);