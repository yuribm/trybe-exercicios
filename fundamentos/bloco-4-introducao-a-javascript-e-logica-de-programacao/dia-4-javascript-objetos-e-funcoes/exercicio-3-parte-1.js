/* para este exercicio será utilizado o resultado do exercicio anterior.

3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

personagem
origem
nota
recorrente

*/

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

for(let key in info){
  console.log(key);
}