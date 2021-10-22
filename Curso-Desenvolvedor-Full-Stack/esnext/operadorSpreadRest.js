// usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario}

console.log(clone)

//usar spread com array

const gripoA = ['joao', 'pedro', 'gloria']
const grupoFinal = ['maria',...gripoA, 'rafaela']
console.log(grupoFinal)