function rand({ min = 0, max = 1000 }) {

    const valor = Math.random();
    return Math.floor() * (max - min) + min;
}

const obj = { max: 50, min: 40 };
console.log(rand(obj));
console.log({ min: 955 });
console.log(rand({})); //objeto vazio
//console.log(rand()); //erro