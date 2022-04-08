// 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.
// const uppercase = (str, callback) => {
//   setTimeout(() => {
//     callback(str.toUpperCase());
//   }, 500);
// };

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('tests if uppercase function change "UpPeRcAsE" to "UPERCASE"', (done) => {
  uppercase('UpPeRcAsE', (str) => {
    try {
      expect(str).toBe('UPPERCASE');
      done();
    } catch (error) {
      done(error);
    }
  });
});
