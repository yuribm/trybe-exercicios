const criptosList = document.getElementById('criptos-list');

async function generateCriptosArray() {
  const url = 'https://api.coincap.io/v2/assets';
  const criptosArray = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => console.log(`Algo deu errado: \n${error}`));
  return criptosArray;
};

async function generateLis() {
  criptosArray = await generateCriptosArray();
  criptosArray.filter((element) => element.rank <= 10)
    .forEach((element) => {
      const { name, symbol, priceUsd } = element;
      const newLi = document.createElement('li');
      newLi.innerText = `${name} (${symbol}): ${priceUsd} USD`;
      criptosList.appendChild(newLi);
    })
};

window.onload = () => {
  generateLis();
}