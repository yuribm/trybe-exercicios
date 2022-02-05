/* 3- Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra. */

// algoritmo para descobrir a maior palavra:

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];

for (let i = 1; i < array.length; i += 1) {
  if (maiorPalavra.length < array[i].length) {
    maiorPalavra = array[i];
  }
}

console.log('a maior palavra é ' + maiorPalavra);

// algoritmo para descobrir a menor palavra:

let menorPalavra = array[0];

for (let i = 1; i < array.length; i += 1) {
  if (menorPalavra.length > array[i].length) {
    menorPalavra = array[i];
  }
}

console.log('a menor palavra é ' + menorPalavra);

// extra,fazendo os dois requisitos com apenas um algoritmo:

let maiorPalavra2 = array[0];
let menorPalavra2 = array[0];

for (let i = 1; i < array.length; i += 1) {
  if (maiorPalavra2.length < array[i].length) {
    maiorPalavra2 = array[i];
  }
  if (menorPalavra2.length > array[i].length) {
    menorPalavra2 = array[i];
  }
}

console.log('a maior palavra é ' + maiorPalavra2 + ' e a menor palavra é ' + menorPalavra2);