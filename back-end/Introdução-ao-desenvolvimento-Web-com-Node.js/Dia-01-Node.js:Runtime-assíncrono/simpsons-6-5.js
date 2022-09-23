//Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.

const { simpsonsRead, simpsonsWrite } = require("./simpsonsAux");

async function includesNewCharacter(newCharacterName) {
  const simpsonData = await simpsonsRead("./simpsonFamily.json");
  const newCharacterObject = {
    id: JSON.stringify(simpsonData.length + 1),
    name: newCharacterName,
  };
  const newSimpsonsData = [...simpsonData, newCharacterObject];
  await simpsonsWrite(newSimpsonsData, "./simpsonFamily.json");
}

async function main() {
  await includesNewCharacter("Nelson Muntz");
  console.log("Novo personagem adicionado com sucesso");
}

main();
