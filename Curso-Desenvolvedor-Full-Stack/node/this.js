console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)
    //forada funcao e global 

function logThis() {

    console.log('dentro de uma funcao') // dentro da funcao  e interna
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

}



logThis()