//novo recurso do es2015

const pessoa = {

    nome: 'Ana',
    idade: 5,

    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }

}

const { nome, idade } = pessoa; // fomar de pegar dados de uma estrutura 

console.log(nome, idade);
console.log(pessoa);

const { nome: n, idade: i } = pessoa;

console.log(n, i);

const { sobrenome, bem = true } = pessoa;
console.log(sobrenome, bem);

const { endereco: { logradouro, numero, cep } } = pessoa //acessar os valores dos atributos dentro dos blocos

console.log(logradouro, numero, cep); //acessar os valores dos atributos dentro dos blocos