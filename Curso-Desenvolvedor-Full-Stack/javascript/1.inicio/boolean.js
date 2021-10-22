let isAtivo = false;

console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

console.log('Valores Verdadeiros');
//valores booleanos verdadeiros
isAtivo = 1;
console.log(!isAtivo); //tornado um valor em booleano

console.log(!!3);

console.log(!!-3);


console.log(!!{});

console.log(!!Infinity);

console.log(!!(isAtivo = true));


console.log('Valores Falsos');

//valores booleanos falsos

console.log(!!'');
console.log(!!0);
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!('' || null || 0 || ''));

let nome = ''
console.log(nome || 'Desconhecido');