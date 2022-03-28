// 9 - A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo .test.js ou .spec.js e copie o código abaixo. Complete os testes para a função getPokemonDetails de acordo com as especificações.

// // Verifique se a importação do arquivo correto está sendo feita.
// const { getPokemonDetails } = require("./get-pokemon-details");

// describe("A função getPokemonDetails", () => {
//   it("retorna erro quando procuramos um pokemon que não existe no banco de dados", () => {
//     // Escreva aqui seu código
//   });

//   it("retorna um pokemon que existe no banco de dados", () => {
//     // Escreva aqui seu código
//   });
// });

// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercicio-8-e-9");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const newError = new Error('Não temos esse pokémon para você :(');
    getPokemonDetails((element) => element.name === 'Pikachu', (error, message) => {
      expect(error).toEqual(newError)
      done()
    });
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    getPokemonDetails((element) => element.name === 'Bulbasaur', (error, message) => {
      expect(message).toBe('Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf');
      done();
    });
  });
});