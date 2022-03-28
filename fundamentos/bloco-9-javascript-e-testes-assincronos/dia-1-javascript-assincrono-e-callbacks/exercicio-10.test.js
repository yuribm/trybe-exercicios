// 10 - Para este exercício, tente adivinhar a saída dos console.log dos testes abaixo sem executá-los, e veja se compreendeu bem o funcionamento do beforeEach e do afterEach .

beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

// RESPOSTA: ordem dos console.log:
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach

// O beforeEach é executado antes de cada teste, enquanto que o afterEach é executado após cada teste. Desta forma temos a sequência 1 - beforeEach; 1 - test; 1 - afterEach para o primeiro teste. Antes de iniciar o teste dentro do describe, executa mais uma vez o 1 - beforeEach. Seguindo a mesma lógica, dentro do describe executa na ordem 2 - beforeEach; 2 - test; 2 - afterEach. Após o describe, executa o 1 - afterEach.