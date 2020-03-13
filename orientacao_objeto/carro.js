var Carro = /** @class */ (function () {
    function Carro(_marca, _velocidadeAtual, _velocidadeMaxima) {
        if (_marca === void 0) { _marca = ""; }
        if (_velocidadeAtual === void 0) { _velocidadeAtual = 10; }
        if (_velocidadeMaxima === void 0) { _velocidadeMaxima = 50; }
        this.marca = _marca;
        this.velocidadeAtual = _velocidadeAtual;
        this.velocidadeMaxima = _velocidadeMaxima;
    }
    Carro.prototype.acelerar = function (marca, velocidadeAtual, velocidadeMaxima) {
        if (this.velocidadeAtual < this.velocidadeMaxima) {
            for (var i = this.velocidadeAtual; i < this.velocidadeMaxima; i++) {
                this.velocidadeAtual++;
                return "A velocidade atual \u00E9 " + this.velocidadeAtual + " km/h \nMax(" + this.velocidadeMaxima + ")";
            }
        }
    };
    Carro.prototype.desacelerar = function (marca, velocidadeAtual, velocidadeMaxima) {
        if (this.velocidadeAtual < this.velocidadeMaxima) {
            for (var i = this.velocidadeAtual; i < this.velocidadeMaxima; i++) {
                this.velocidadeAtual--;
                return "O carro esta desacelerando " + this.velocidadeAtual + " km/h)";
            }
        }
        if (this.velocidadeAtual == 0) {
            return "O varro parou!";
        }
    };
    return Carro;
}());
var Carro1 = new Carro();
console.log(Carro1.acelerar("BMW", 20, 20));
