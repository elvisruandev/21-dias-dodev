//DESAFIO 1 - JANTAR ESPECIAL

//Criando as variáveis e questionários
let fome = prompt("Você está com fome? (sim/não)")
let dinheiro = prompt("Você está com dinheiro? (sim/não)")
let restauranteAberto = prompt("O restaurante está aberto? (sim/não)")

//Criando as condicionais
if(fome === "não" || dinheiro === "não"){
    console.log("Hoje a janta será em casa!")
}else if(dinheiro === "sim" && restauranteAberto === "não"){
    console.log("Peça um delivery!")
}else{
    console.log("Hoje o jantar será no seu restaurante preferido!")
}