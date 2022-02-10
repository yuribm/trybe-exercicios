/* 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
Valor de teste: 'trybe' e 'be'
Valor esperado no retorno da função: true
verificaFimPalavra('trybe', 'be') ;
Retorno esperado: true
verificaFimPalavra('joaofernando', 'fernan') ;
Retorno esperado: false
*/

function verificaSubstring (word, ending) {
  let indiceSubstring = word.length - ending.length;
  let substringWord = word.substring(indiceSubstring, word.length);
  return substringWord === ending;
}
console.log(verificaSubstring('trybe', 'be'));
console.log(verificaSubstring('joaofernando', 'fernan'));
