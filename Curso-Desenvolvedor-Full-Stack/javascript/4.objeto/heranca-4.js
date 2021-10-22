function MeuObjeto() {
    console.log(MeuObjeto.prototype)
}

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__) //eles sao estritamente iguais

console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Alex' //adicionado um atributo nome ao objeto
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! meu nome e ${this.nome}!`)
}
console.log(obj1.nome)
obj1.falar()
obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}

obj3.__proto__ = MeuObjeto.prototype
obj3.nome = obj3
obj3.falar()


//teste 
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.__proto__)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)