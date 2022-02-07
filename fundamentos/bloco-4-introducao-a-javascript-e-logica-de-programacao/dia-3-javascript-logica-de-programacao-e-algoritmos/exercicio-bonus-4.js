/*  4- Depois, faça uma pirâmide com n asteriscos de base:

n = 5

  *
 ***
*****           
OBS: apesar de não estar explícito no enunciado, para construção da pirâmide seguindo o padrão apresentado é necessário assumir que n será sempre ímpar.
*/

let n = 7;
let numeroDeLinhas = Math.ceil(n / 2);
let linhaLadoEsquerdo;
let linhaLadoDireito;

for (let indexLinha = 1; indexLinha <= numeroDeLinhas; indexLinha += 1) {
  linhaLadoEsquerdo = '';
  linhaLadoDireito = '';
  for (let indexColunaEsquerda = 1; indexColunaEsquerda <= numeroDeLinhas; indexColunaEsquerda += 1) {
    if (linhaLadoEsquerdo.length < numeroDeLinhas - indexLinha) {
      linhaLadoEsquerdo += ' ';
    }
    else {
      linhaLadoEsquerdo += '*';
    }
  }
  for (let indexColunaDireita = 1; indexColunaDireita <= numeroDeLinhas - 1; indexColunaDireita += 1) {
    if (indexLinha !== 1 && linhaLadoDireito.length < indexLinha - 1) {
      linhaLadoDireito += '*';
    }
  }
  console.log(linhaLadoEsquerdo + linhaLadoDireito)
}
