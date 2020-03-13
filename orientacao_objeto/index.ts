// inicio da definicao da classe

class Cupimenta
{
    //atributos  nome do atributo:titulo
    nome:string;
    idade: number;

    //metodo construtor
    constructor (_nome: string,_idade:number)
    {
        this.nome=_nome;
        this.idade=_idade;
    }

    //outro metodo
    mostrarNomeIdade (idade:number, nome:string)
    {
        return `O LuciGado tem ${nome} ${idade} `
    }
}
// fim da definicao da classe

//invocando a funcao e o resultado vou armazenar na variavel de memoria resposta

let pessoa1 = new Cupimenta("nome", 26) // serve para criar um objeto
console.log(pessoa1.mostrarNomeIdade(26, "Corona")) // utilizando um metodo do objeto resposta    
