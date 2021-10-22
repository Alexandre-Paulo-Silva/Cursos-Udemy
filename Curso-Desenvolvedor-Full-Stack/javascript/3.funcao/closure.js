//clouse e o escopo criado quando uma funcao e declarada
//Esse escopo permite a funcao acessar e malipular variaveis externas a fucao

// contexto lexico em acao 

const x = 'Global'

function fora() {
    const x = 'Local'

    function dentro() {
        returnx
    }

    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao)