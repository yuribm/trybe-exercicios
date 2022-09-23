// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.

const { simpsonsRead, simpsonsWrite } = require("./simpsonsAux");

async function replaceCharacter(oldCharacterName, newCharacterName) {
  const simpsonData = await simpsonsRead("./simpsonFamily.json");

  const newSimpsonsData = simpsonData.map((simpson) => {
    if (simpson.name === oldCharacterName) {
      newSimpson = {
        id: simpson.id,
        name: newCharacterName,
      };
      return newSimpson;
    }
    return simpson;
  });

  await simpsonsWrite(newSimpsonsData, "./simpsonFamily.json");
}

async function main() {
  replaceCharacter("Nelson Muntz", "Maggie Simpson");
  console.log("Personagem substituído com sucesso");
}

main();
