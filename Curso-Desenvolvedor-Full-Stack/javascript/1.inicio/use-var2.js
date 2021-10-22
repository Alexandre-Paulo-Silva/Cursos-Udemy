// dica fuja de escopos globais 

var numero = 1;

{
    var numero = 2;
    console.log('detro =', numero);

}

console.log('fora = ', numero);