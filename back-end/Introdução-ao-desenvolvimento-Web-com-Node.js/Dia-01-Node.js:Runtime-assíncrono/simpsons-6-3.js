// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

const { simpsonsRead, simpsonsWrite } = require("./simpsonsAux");

async function changeFileById() {
  const simpsonsData = await simpsonsRead("./simpsons.json");
  const newSimpsonsData = simpsonsData.filter(
    (simpson) => Number(simpson.id) !== 10 && Number(simpson.id) !== 6
  );

  await simpsonsWrite(newSimpsonsData, "./simpsons.json");
}

async function main() {
  await changeFileById();
  console.log('Aquivo alterado com sucesso!')
}

main();