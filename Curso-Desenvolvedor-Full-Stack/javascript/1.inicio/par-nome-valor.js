const saudacao = 'opa' // contexto lexico 1

function exec() {

    const saudacao = 'Falaa'; // contexto lexico 2
    return saudacao;
}

//objetos sao grupos aninhandos de pares nome/valor

console.log(exec(saudacao));


const cliente = {

    nome: 'Pedro',
    idade: 32,
    peso: 90,

    endereco: {
        logradouro: 'Rua leal',
        numero: 123
    }

}

console.log(saudacao);
console.log(exec());
console.log(cliente);