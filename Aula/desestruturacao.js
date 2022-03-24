//Desestruturação - Destructuring

const pessoa = {
  nome: "João",
  idade: 34,
  cidade: "Salvador",
  profissao: "Desenvolvedor"
}

// ----- Forma Normal de Colocar Obj. em variável ------------

//const nome = pessoa.nome;
//const idade = pessoa.idade;

// --------- Desestruturação -------------- 

const { nome, idade, ...outras } = pessoa; //Com esse metodo, ao utilizar as variaveis ela já vai estar com os respectivos elementos dos objetos. ("... outras" é basicamente todas as variáveis guardadas em um array com as variáveis restantes.)

//Tem como mudar também o nome da variável, apenas colocando...
const { nome: nome_da_pessoa, idade, ...outras } = pessoa;

console.log(nome_da_pessoa);
console.log(idade);
console.log(outras);
console.log(pessoa);