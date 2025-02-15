//Criando a variável "numero"
let numero = Number(prompt("Você deseja a tubuada de qual número?"))

//Criando loop for (gerando a variável "numero" e os dois números seguintes)
for(let contador1 = numero; contador1 <= numero + 2; contador1++){
    console.log("Tabuada do número: " + contador1)
    //loop interno (tabuada de 0 a 10 dos números gerados acima)
    for(let contador2 = 0; contador2 <=10; contador2++){
        console.log(contador1 + " x " + contador2 + " = " + (contador1*contador2))
    }
}