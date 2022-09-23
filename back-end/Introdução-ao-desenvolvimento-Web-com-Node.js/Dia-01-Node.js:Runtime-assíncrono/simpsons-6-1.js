// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.

const { simpsonsRead } = require("./simpsonsAux");

async function printCharacters() {
  const simpsonsData = await simpsonsRead("./simpsons.json");
  simpsonsData.forEach(({ id, name }) => {
    const simpsonName = `${id} - ${name}`;
    console.log(simpsonName);
  });
}

function main() {
  printCharacters();
}

main();
