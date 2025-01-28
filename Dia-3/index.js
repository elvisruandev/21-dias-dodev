//Solicitando informação ao usuário e atribuindo os valores as variáveis
let nome = prompt("Digite seu nome")
let idade = parseInt(prompt("Digite sua idade"))
let altura = parseFloat(prompt("Digite sua altura"))
let peso = parseInt(prompt("Digite seu peso"))

//Calculando o ano que a pessoa nasceu e o IMC
let anoNasc = 2024 - idade

let imc = peso / (altura * altura)

//Exibindo as informações no console
console.log("Olá " + nome + ", você tem " + idade + " anos, nasceu em " + anoNasc + ", tem " + altura + " de altura, pesa " + peso + "kg e seu IMC é " + imc + "kg/m2.") 