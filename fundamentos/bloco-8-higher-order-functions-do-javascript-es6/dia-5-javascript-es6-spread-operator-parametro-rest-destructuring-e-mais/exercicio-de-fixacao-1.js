// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['', '', ''];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['', '', ''];

// const fruitSalad = (fruit, additional) => {
//   // Esreva sua função aqui
// };

// console.log(fruitSalad(specialFruit, additionalItens));


// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maçã', 'manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['suco de laranja', 'mel', 'creme de leite'];

const fruitSalad = (fruit, additional) => {
  return [...specialFruit, ...additionalItens]
};

console.log(fruitSalad(specialFruit, additionalItens));