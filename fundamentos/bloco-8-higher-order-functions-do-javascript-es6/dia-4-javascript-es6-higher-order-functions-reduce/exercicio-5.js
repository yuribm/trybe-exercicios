// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

// const names = [
//   'Aanemarie', 'Adervandes', 'Akifusa',
//   'Abegildo', 'Adicellia', 'Aladonata',
//   'Abeladerco', 'Adieidy', 'Alarucha',
// ];

// function containsA() {
//   // escreva seu código aqui
// }

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names
    .map((element) => element.split(''))
    .reduce((acc, cur) => {
      return acc.concat(cur)
    }, [])
    .reduce((acc, cur) => {
      if (cur.includes('a') || cur.includes('A')) {
        return acc += 1
      }
      return acc;
    }, 0);
};
