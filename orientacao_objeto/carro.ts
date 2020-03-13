class Carro {
    marca:string;
    velocidadeAtual: number;
    velocidadeMaxima: number;

    constructor (_marca:string = "", _velocidadeAtual:number=10, _velocidadeMaxima:number=50) {
        this.marca=_marca
        this.velocidadeAtual=_velocidadeAtual
        this.velocidadeMaxima=_velocidadeMaxima

    }

    acelerar(marca:string, velocidadeAtual:number, velocidadeMaxima:number){
        if(this.velocidadeAtual < this.velocidadeMaxima){
            for(let i = this.velocidadeAtual; i < this.velocidadeMaxima; i++) {
                this.velocidadeAtual ++
                return `A velocidade atual é ${this.velocidadeAtual} km/h \nMax(${this.velocidadeMaxima})`
            }
        }
    }

    desacelerar(marca:string,velocidadeAtual:number,velocidadeMaxima:number){
        if(this.velocidadeAtual < this.velocidadeMaxima){
            for(let i = this.velocidadeAtual; i < this.velocidadeMaxima; i++) {
                this.velocidadeAtual --
                return `O carro esta desacelerando ${this.velocidadeAtual} km/h)`
            }
}
if(this.velocidadeAtual == 0){
    return `O varro parou!`
}
}
}

let Carro1 = new Carro()
console.log(Carro1.acelerar("BMW", 20 , 20))