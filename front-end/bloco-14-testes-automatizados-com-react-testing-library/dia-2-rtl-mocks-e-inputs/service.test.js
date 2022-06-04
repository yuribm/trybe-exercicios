const services = require('./services');


describe('Exercícios Parte 1 - 1.1', () => {

  it('Testa se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
    services.generateRandomNumber = jest.fn().mockReturnValue(10);

    expect(services.generateRandomNumber()).toBe(10);
    expect(services.generateRandomNumber).toHaveBeenCalled();
    expect(services.generateRandomNumber).toHaveBeenCalledTimes(1);
  });

});

describe('Exercícios Parte 1 - 1.2', () => {

  it('Testa nova implementação para função com dois parâmetros, seu retorno e se foi chamada', () => {
    services.generateRandomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);


    expect(services.generateRandomNumber(10, 5)).toBe(2);
    expect(services.generateRandomNumber).toHaveBeenCalled();
    expect(services.generateRandomNumber).toHaveBeenCalledTimes(1);
  });

});


describe('Exercícios Parte 1 - 1.3', () => {

  it('Testa nova implementação para função com três parâmetros, seu retorno e se foi chamada', () => {
    services.generateRandomNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);

    expect(services.generateRandomNumber(2, 3, 4)).toBe(24);
    expect(services.generateRandomNumber).toHaveBeenCalled();
    expect(services.generateRandomNumber).toHaveBeenCalledTimes(1);
    expect(services.generateRandomNumber).toHaveBeenCalledWith(2, 3, 4)
  });

  it('Testa nova implementação para função com um parâmetro, seu retorno e se foi chamada', () => {
    services.generateRandomNumber.mockReset()

    services.generateRandomNumber = jest.fn().mockImplementationOnce((a) => a * 2);

    expect(services.generateRandomNumber(2)).toBe(4);
    expect(services.generateRandomNumber).toHaveBeenCalled();
    expect(services.generateRandomNumber).toHaveBeenCalledTimes(1);
    expect(services.generateRandomNumber).toHaveBeenCalledWith(2)

  });
});

describe('Exercícios Parte 1 - 1.4', () => {

  it('Testa função changeToUpperCase', () => {
    const mockChangeToUpperCase = jest
      .spyOn(services, 'changeToUpperCase')
      .mockImplementation((string) => string.toLowerCase());

    expect(mockChangeToUpperCase('TeSt')).toBe('test');
    expect(services.changeToUpperCase).toHaveBeenCalled();
    expect(services.changeToUpperCase).toHaveBeenCalledTimes(1);
    expect(services.changeToUpperCase).toHaveBeenCalledWith('TeSt');
  });

  it('Testa a função returnsFirstLetter', () => {
    const mockReturnsFirstLetter = jest
      .spyOn(services, 'returnsFirstLetter')
      .mockImplementation((string) => string[string.length - 1]);

    expect(mockReturnsFirstLetter('test')).toBe('t');
    expect(services.returnsFirstLetter).toHaveBeenCalled();
    expect(services.returnsFirstLetter).toHaveBeenCalledTimes(1);
    expect(services.returnsFirstLetter).toHaveBeenCalledWith('test');
  });

  it('Testa a função concatsStrings', () => {
    const mockConcatsStrings = jest
      .spyOn(services, 'concatsStrings')
      .mockImplementation((firstString, secondString, thirdString) => firstString + secondString + thirdString);

    expect(mockConcatsStrings('test1', 'test2', 'test3')).toBe('test1test2test3');
    expect(services.concatsStrings).toHaveBeenCalled();
    expect(services.concatsStrings).toHaveBeenCalledTimes(1);
    expect(services.concatsStrings).toHaveBeenCalledWith('test1', 'test2', 'test3');
  });

  it('Restaura e testa a função changeToUpperCase', () => {
    services.changeToUpperCase.mockRestore();

    const mockChangeToUpperCase = jest
      .spyOn(services, 'changeToUpperCase');

    expect(mockChangeToUpperCase('TeSt')).toBe('TEST');
    expect(services.changeToUpperCase).toHaveBeenCalled();
    expect(services.changeToUpperCase).toHaveBeenCalledTimes(1);
    expect(services.changeToUpperCase).toHaveBeenCalledWith('TeSt');
  });
});

// describe('Exercícios Parte 1 - 1.5', () => {

//   it('Testa a função fetchDogApi', () => {
//     const dog = {
//       "message": "https://images.dog.ceo/breeds/hound-english/n02089973_243.jpg",
//       "status": "success"
//     }

//     global.fetch = jest.fn(() => Promise.resolve({
//       json: () => Promise.resolve(fetchDogApi),
//     }));

//     services.fetchDogApi();

//     expect()
//   });
// });




