// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let maiorPrimo;

for (let i = 2; i <= 50; i += 1) {
  let testePrimo = 0;
  for (let j = 1; j <= i; j += 1) {
    if(i % j === 0) {
      testePrimo += 1;
    }    
  }
  if (testePrimo <= 2) {
      maiorPrimo = i;
    }
}

console.log(maiorPrimo);