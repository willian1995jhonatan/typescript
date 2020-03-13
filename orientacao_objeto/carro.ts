class Aceleracao {
    nome:string;
    marca:string
    ano:number;
    max:number;
    atual:number;

    constructor (_nome: string,_marca: string,_ano: number,_max:number,_atual: number){
    this.nome=_nome
    this.marca = _marca
    this.ano = _ano
    this.max = Number(_max)
    this.atual = Number(_atual)
}
    function acelerar(){ 
    if(.atual < this.max){
    this.variacaoAceleracao()
    this.atual+= variacao
    carro1.andar()
    funcao = "carro1.acelerar()"
    carro1.tempo(funcao)
    }
    
}
Carro.prototype.desacelerar= function(){
    if(this.atual > -1){
        variacao = -1
        this.atual+=variacao
    }
    carro1.andar()
    funcao = "carro1.desacelerar()"
    carro1.tempo(funcao)
}
Carro.prototype.tempo = function(funcao){
    if(funcao == "carro1.acelerar()"){
        setTimeout("carro1.acelerar()", 50)
    }
    if(funcao == "carro1.desacelerar()"){
        setTimeout("carro1.desacelerar()", 0.5)
    }
    
}
Carro.prototype.andar= function(){
    if(funcao == "carro1.desacelerar()"){
        var constante = 1000
    }
    else{
        var constante = 40
    }
    if(this.atual > 0){
        margem += this.atual/constante
        document.getElementById("velocidade"+this.nome).textContent=this.atual.toFixed(0) + " Km/h"
        document.getElementById(""+this.nome).style.marginLeft=margem+"px"
    }


}
Carro.prototype.variacaoAceleracao = function(){
    if(this.atual < 20){
        variacao= 1
    }
    else{
        if(this.atual < 60){
            variacao= 0.8
        }
        else{
            if(this.atual < 100){
                variacao= 0.3
            }
            else{
                if(this.atual < 120){
                    variacao = 0.2
                }
                else{
                    variacao = 0.1
                }
            }
        }
    }
}
var execucao = 0
var funcao = ""
var margem = 0
carro1 = new Carro("carro1","Fiat 147","2019","220","0")
var variacao = 0
document.getElementById("marca").textContent=carro1.marca