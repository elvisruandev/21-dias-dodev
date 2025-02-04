//DESAFIO 2 - MOTORISTA

//Criando as variáveis e questionários
let nome = prompt("Qual o seu nome?")
let idade = parseInt(prompt("Qual sua idade?"))
let cnh = prompt("Você possui CNH? (sim/não)")
let carro = prompt("Você possui carro? (sim/não)")

//Criando as condicionais
if(idade < 18 || cnh === "não"){
    console.log(nome + ", você não pode dirigir.")
}else if(idade >= 18 && cnh === "sim" && carro === "não"){
    console.log(nome + ", você pode dirigir mas não tem um carro.")
}else{
    console.log(nome + ", você será o motorista!")
}