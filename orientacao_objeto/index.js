// inicio da definicao da classe
var Cupimenta = /** @class */ (function () {
    //metodo construtor
    function Cupimenta(_nome, _idade) {
        this.nome = _nome;
        this.idade = _idade;
    }
    //outro metodo
    Cupimenta.prototype.mostrarNomeIdade = function (idade, nome) {
        return "O LuciGado tem " + nome + " " + idade + " ";
    };
    return Cupimenta;
}());
// fim da definicao da classe
//invocando a funcao e o resultado vou armazenar na variavel de memoria resposta
var pessoa1 = new Cupimenta("nome", 26); // serve para criar um objeto
console.log(pessoa1.mostrarNomeIdade(26, "Corona")); // utilizando um metodo do objeto resposta    
