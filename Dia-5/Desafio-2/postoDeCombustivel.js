//DESAFIO 2 - POSTO DE COMBUSTÍVEL

//Criando as variáveis e questionários
let valor
let quantidade
let opção = prompt("Bem Vindo, o que você deseja? " + "\n1 - abastecer com gasolina; \n2 - abastecer com alcool; \n3 - calibrar os pneus")

//Criando switchCase
switch (opção){
    case "1":
        valor = Number(prompt("Qual o valor desejado para abastecer?"))
        quantidade = valor/5
        console.log("Foram abastecidos " + quantidade + " litros de gasolina.")
        break;
    case "2":
        valor = Number(prompt("Qual o valor desejado para abastecer?"))
        quantidade = valor/3
        console.log("Foram abastecidos " + quantidade + " litros de alcool.")
        break;
    case "3":
        console.log("Pneus calibrados com sucesso!")
        break;
    default:
        console.log("Opção inválida, selecione um número de 1 a 3.")
        break
}