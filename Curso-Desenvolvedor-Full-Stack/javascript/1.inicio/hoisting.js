console.log('a =', a); //indefinido
var a = 2;
console.log('a=', a);

//no javascrip nao interpreta como erro se voce declarar a variavel depois da opercao


function teste() {

    console.log('a', a);
    var a = 2;
    console.log('a=', a);
}
teste();