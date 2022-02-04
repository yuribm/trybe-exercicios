/* Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let totalImpares = 0;

for (let i of numbers) {
  if (i % 2 !== 0) {
    totalImpares += 1;
  }
}

if (totalImpares !== 0) {
  console.log("O array numbers possui " + totalImpares + " número(s) ímpar(es)");
}
else {
  console.log("nenhum valor ímpar encontrado");
}