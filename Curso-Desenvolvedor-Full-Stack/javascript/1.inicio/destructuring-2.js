const [a] = [10];
console.log = [10];

const [n1, n2, n3, n4, n5, n6 = 0] = [10, 7, 9, 8];


const [, [, nota]] = [
    [, 8, 8],
    [9, 6, 8]
];

console.log(nota);