const escola = "alexandre";
console.log(escola.charAt(4)); //imprimido as apartir da posição da string
console.log(escola.charAt(5));
console.log(escola.charAt(3));

console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log('Escola'.concat(escola)); //comcanado o testo literal o texto da variavel escola
console.log('Escola'.concat(escola).concat("!"));
console.log(escola.replace(/\d/, 'e')); //subistue todos os valores da variavel

console.log('Ana, Maria, Pedro'.split(',')); //transforma um cadeia de caracteres e arras