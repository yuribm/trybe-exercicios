/* 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2 .
*/

function verificaQualMaisRepete(arrayTeste) {
  let repeticoes = [];
  for (let elementoArrayTeste1 of arrayTeste) {
    let auxiliar = 0;
    for (let elementoArrayTeste2 of arrayTeste) {
      if (elementoArrayTeste1 === elementoArrayTeste2) {
        auxiliar += 1;
      }
    }
    repeticoes.push(auxiliar);
  }
  let maisRepetido = 0;
  for (let elementoRepeticoes of repeticoes) {
    if (elementoRepeticoes > maisRepetido) {
      maisRepetido = elementoRepeticoes;
    }
  }
  return arrayTeste[(repeticoes.indexOf(maisRepetido))]
}

console.log(verificaQualMaisRepete([2, 3, 2, 5, 8, 2, 3]));