// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.

const { simpsonsRead, simpsonsWrite } = require("./simpsonsAux");

async function createNewSimpsonsFile() {
  const simpsonsData = await simpsonsRead("./simpsons.json");
  const newSimpsonsData = simpsonsData.filter(({ id }) => Number(id) <= 4);
  await simpsonsWrite(newSimpsonsData, "./simpsonFamily.json" );
}

async function main() {
  await createNewSimpsonsFile();
  console.log("Novo arquivo criado com sucesso!")
}

main();
