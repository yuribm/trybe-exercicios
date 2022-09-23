const { simpsonsRead } = require("./simpsonsAux");

async function searchSimpsonById(id) {
  const simpsonsData = await simpsonsRead("./simpsons.json");
  const selectedSimpson = simpsonsData.find(
    (simpson) => Number(simpson.id) === id
  );
  if (!selectedSimpson) {
    throw new Error("id não encontrado");
  }
  return selectedSimpson;
}

async function main() {
  console.log(await searchSimpsonById(3));
}

main();
