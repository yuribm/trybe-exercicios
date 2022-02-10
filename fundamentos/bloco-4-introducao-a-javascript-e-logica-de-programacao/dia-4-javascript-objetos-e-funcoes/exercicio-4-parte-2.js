/* 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda .
*/

function verificaMaiorNome(nomes) {
  let maiorNome = '';
  for (let elementoNomes of nomes) {
    if (maiorNome.length < elementoNomes.length) {
      maiorNome = elementoNomes;
    }
  }
  return maiorNome;
}

console.log(verificaMaiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
