let valor;

console.log(valor); // nullo que dizer ausencia de valores

valor = null
console.log(valor);

//console.log(valor.toString()); erro sempre tenha um valor padrao


const produto = {}

console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // evite atribuir undefield

console.log(!!produto.preco);

//delete produto.preco;

console.log(produto);

produto.preco = null // sem preco

console.log(!!produto.preco);
console.log(produto);