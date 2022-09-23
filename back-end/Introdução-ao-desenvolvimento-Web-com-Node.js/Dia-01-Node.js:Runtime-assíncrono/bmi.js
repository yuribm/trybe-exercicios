// Crie um código para calcular o índice de massa corporal(IMC) de uma pessoa.
// Agora, permita que o código seja executado através do comando npm run bmi.
// Chegou a hora de tornar nosso código mais interativo! Vamos adicionar inputs de entrada para quem usar. Edite o código para que os valores de weight e height sejam informados pela pessoa ao responder as perguntas: “What’ your weight?” e “What’ your height?”, deve-se utilizar o pacote readline-sync.
// Agora temos um problema, o peso não é um número inteiro! Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado. O pacote readline-sync possui uma função específica para tratar esses casos. Consulte a documentação do pacote e encontre a função adequada para realizar input de valores float.
// Vamos sofisticar um pouco mais nosso exercício. Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra:

const readline = require("../readline-sync");

const weight = readline.questionFloat("What’ your weight (kg)?");
const height = readline.questionInt("What’ your height (cm)?");

function bmiCalculator(weight, height) {
  const bmi = weight / (height / 100) ** 2;

  if (bmi < 18.5) {
    console.log("Abaixo do peso (magreza)");
  } else if (bmi <= 24.9) {
    console.log("Peso normal");
  } else if (bmi <= 29.9) {
    console.log("Acima do peso (sobrepeso)");
  } else if (bmi <= 34.9) {
    console.log("Obesidade grau I ");
  } else if (bmi <= 39.9) {
    console.log("Obesidade grau II ");
  } else {
    console.log("Obesidade grau III e IV ");
  }

  return bmi;
}

console.log(`seu imc é ${bmiCalculator(weight, height)}`);
