
/* 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false
*/

function verificaPalindromo(palavra) {
  let arrayPalavra = palavra.split('');
  let arrayPalavraInvertido = arrayPalavra.reverse();
  let palavraInvertida = arrayPalavraInvertido.join('');
  if (palavraInvertida === palavra) {
    return true;
  }
  else {
    return false;
  }
}