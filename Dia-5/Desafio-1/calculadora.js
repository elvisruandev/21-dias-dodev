//DESAFIO 1 - CALCULADORA

//Criando as variáveis e questionários
let num1 = Number(prompt("Digite um número aleatório"))
let num2 = Number(prompt("Digite outro número aleatório"))
let operação = prompt("Escolha a operação que deseja realizar com os números escolhidos:" + "\n1 = adição; \n2 = subtração; \n3 = divisão; \n4 = multiplicação")

//Criando switchCase
switch (operação){
    case "1":
        console.log(num1 + " + " + num2 + " = " + (num1+num2))
        break;
    case "2":
        console.log(num1 + " - " + num2 + " = " + (num1-num2))
        break;
    case "3":
        console.log(num1 + " / " + num2 + " = " + (num1/num2))
        break;
    case "4":
        console.log(num1 + " * " + num2 + " = " + (num1*num2))
        break;
    default:
        console.log("Opção inválida, selecione um número de 1 a 4.")
        break
}