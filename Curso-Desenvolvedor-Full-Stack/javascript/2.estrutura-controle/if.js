function noticia(nota) {

    if (nota >= 7) {
        console.log('Aprovado com ' + nota);
    }
}

noticia(8.1);
noticia(6.1);


function verdade(valor) {

    if (valor) {
        console.log('E verdade ' + valor);
    }
}

verdade();
verdade(null);
verdade(undefined);
verdade(NaN);
verdade('');
verdade(0);
verdade(-1);
verdade('?');
verdade({});