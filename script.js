//variáveis
let nomeAluno;
let sobrenomeAluno;
let anoNascimentoAluno;

//constantes
const NOME_ESCOLA = "SENAI";
const ANO_ATUAL = 2023;

//receber informações do usuário
nomeAluno = prompt("digite o seu primeiro nome:");
sobrenomeAluno = prompt("digite o seu sobrenome:");
let nomeAlunoCompleto = nomeAluno + " " + sobrenomeAluno;
anoNascimentoAluno = parseInt(prompt("Digite o ano do seu nascimento:"));
idadeAluno = ANO_ATUAL - anoNascimentoAluno;

alert("Seu nome é " + nomeAluno +  sobrenomeAluno + " e você estuda no " + NOME_ESCOLA + ", sua idade é" + idadeAluno + "ano(s).");