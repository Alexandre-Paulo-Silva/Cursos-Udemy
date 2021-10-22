function Pessoa() {
    this.idade = 0 //substuindo o this
    const self = this
    setInterval(function() { //funcao com intervalos
            self.idade++
                console.log(self.idade)
        } /*.bind(this)*/ , 1000) //intervalo a cada mile segundo ela e ativada

}

new Pessoa