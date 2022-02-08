/* 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 .
*/

function verificaMaiorValor (arrayTeste) {
  let maiorValor = 0;
  for (let numero of arrayTeste) {
    if (numero > maiorValor) {
      maiorValor = numero;
    }
  }
  return arrayTeste.indexOf(maiorValor)
}

console.log(verificaMaiorValor([2, 3, 6, 7, 10, 1]));