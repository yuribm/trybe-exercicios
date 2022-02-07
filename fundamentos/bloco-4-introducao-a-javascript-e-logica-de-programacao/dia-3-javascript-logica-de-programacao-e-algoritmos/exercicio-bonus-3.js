/* 3- Agora inverta o lado do triângulo. Por exemplo:

n = 5

    *
   **
  ***
 ****
*****
Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.
*/

let n = 5;
let linha;

for (let i = 1; i <= n; i += 1) {
  linha = '';
  for (let j = 1; j <= n; j += 1) {
    if (linha.length < n - i) {
      linha += ' ';
    }
    else {
      linha += '*';
    }
  }
  console.log(linha);
}