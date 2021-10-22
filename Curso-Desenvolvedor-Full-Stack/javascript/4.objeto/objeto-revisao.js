//colecao dimica de pares chaves/valor


const produto = new Object
produto.nome = 'Cadeia'
produto['marca do produto'] = 'Generica'

produto.preco = 220
delete produto['marca do produto']
console.log(produto)

const carro = { //objeto
    modelo: 'A4',
    valor: '89000',
    proprietario: {
        nome: 'Alex', //atribitos
        idade: 27,
        endereco: {
            logradouro: 'Rua tal',
            numero: 101

        },
        condutores: [{ // conjuto de objetos ou arrays
            nome: 'Paulo',
            idade: '19',
        }, {
            nome: 'Ana',
            idade: 42

        }],

        calc_valor_seguro: function() { //funcao 


        }
    }

}

carro.proprietario.endereco.numero = 1000