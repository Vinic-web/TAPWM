//metodo 1
const pessoa1 = {nome: "João", idade: "20", hobby: "tocar violão",
    apresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}`;
    }
};

//metodo 2
const pessoa2 = new Object()
pessoa2.nome = "Gustavo";
pessoa2.idade = "18";
pessoa2.hobby = "jogar basquete";
pessoa2.apresentar = function() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}`;
};

//metodo 3
function pessoa(nome, idade, hobby){
    this.nome = nome;
    this.idade = idade;
    this.hobby = hobby;
    this.apresentar = function() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}`;
    };
}
const pessoa3 = new pessoa("Vinicius", "18", "se vitimizar");

//metodo 4
class person {
    constructor(nome, idade, hobby){
        this.nome = nome;
        this.idade = idade;
        this.hobby = hobby;
    }
    apresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}`;
    }
}
const pessoa4 = new person("Pessoa", "20", "jogar fut");

//metodo 5
const pessoaPropotipo = {
    apresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}`;
    }
};

const pessoa5 = Object.create(pessoaPropotipo);
pessoa5.nome = "Alemão";
pessoa5.idade = "30";
pessoa5.hobby = "andar de patins";

