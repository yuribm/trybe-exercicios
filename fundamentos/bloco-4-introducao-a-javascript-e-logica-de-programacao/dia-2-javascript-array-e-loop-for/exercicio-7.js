/* Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

Utilizando for , descubra qual o menor valor contido no array e imprima-o; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numbersSort = [numbers[0]]

for (let i = 1; i < numbers.length; i += 1) {
  if (numbers[i] < numbersSort[numbersSort.length -1]) {
    numbersSort.push(numbers[i]);
  }  
}

console.log(numbersSort[numbersSort.length -1]);
