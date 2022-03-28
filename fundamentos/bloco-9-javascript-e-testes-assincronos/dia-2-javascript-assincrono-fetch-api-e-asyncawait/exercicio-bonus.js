const criptosList = document.getElementById('criptos-list');

async function generateCriptosArray() {
  const url = 'https://api.coincap.io/v2/assets';
  const criptosArray = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => console.log(`Algo deu errado: \n${error}`));
  return criptosArray;
};

async function getBrlQuote() {
  const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json';
  const brl = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.usd.brl)
    .catch((error) => console.log(`Algo deu errado: \n${error}`));  
  return brl;
}

async function generateLis() {
  const criptosArray = await generateCriptosArray();
  const brl = await getBrlQuote();
  criptosArray.filter((element) => element.rank <= 10)
    .forEach((element) => {
      const { name, symbol, priceUsd } = element;
      const newLi = document.createElement('li');
      newLi.innerText = `${name} (${symbol}): ${priceUsd * brl} BRL`;
      criptosList.appendChild(newLi);
    })
};

window.onload = () => {
  generateLis();
}