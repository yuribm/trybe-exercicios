/* 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 .
*/

function verificaMenorValor (arrayTeste) {
  let menorValor = arrayTeste[0];
  for (let numero of arrayTeste) {
    if (numero < menorValor) {
      menorValor = numero;
    }
  }
  return arrayTeste.indexOf(menorValor)
}

console.log(verificaMenorValor([2, 4, 6, 7, 10, 0, -3]));