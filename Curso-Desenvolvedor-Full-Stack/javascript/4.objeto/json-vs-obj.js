// Json e um formato de dado formato textual sem funcoes

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj)) //convertendo o obj para JSON

//console.log(JSON, parse("{a:1,b:2,c:3}")) //erro

console.log(JSON.parse('{"a":1 ,"b":2}')) //formato valido de um JSON

console.log(JSON.parse('{"a":1,"b":"string", "c": true, "d":{}, "e":[]}')) //outras formas