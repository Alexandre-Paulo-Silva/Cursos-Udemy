function tratar(erro) {

    //throw new Error('...');
    //throw 10;
    //throw true;
    //throw 'message';

    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Data
    }

}

function imprimir(obj) {
    try {
        console.log(obj.nome.toUpperCase() + '!!!');
    } catch (e) {
        tratar(e);
    } finally {
        console.log('final');
    }
}

const obj = { nome: 'Roberto' };
imprimir(obj);