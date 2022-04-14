// arquivo App.js, criado pelo create-react-app, modificado

// Crie os componentes acima dentro do diretório src do projeto fixation-exercises-10-2 , para poder fazer o exercício a seguir.
// Agora, responda ao seguinte, no que diz respeito à composição de componentes:
// O que o componente App é em relação a Order ?

// RESPOSTA: Inicialmente App não tem relaçao com Order. Após completar o código, App será pai de Order.

// Complete o código acima de forma que os pedidos referentes aos produtos headphone e energyDrink sejam filhos de App .


import React from 'react';
import './App.css';
import Order from './Order';

class App extends React.Component {
  render() {
    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };

    return (
      <div className="App">
        <h1> Orders recently created </h1>
         {/*  adicione os componentes aqui */}
         <Order order={headphone} />
         <Order order={energyDrink} />
      </div>
    );
  }
}

export default App;