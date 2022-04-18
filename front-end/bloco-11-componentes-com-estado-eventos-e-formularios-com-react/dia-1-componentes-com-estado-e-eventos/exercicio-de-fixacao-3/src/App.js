// OBS: para este exercício, foi copiado o código do exercício de fixação 2

// 5 - Agora você vai converter sua aplicação para uma que conta o número de cliques dado em cada botão! Primeiramente, defina um estado inicial para a contagem de cada botão.
// 🦜 Dica: Uma possibilidade é você definir três chaves, uma para cada botão!
// 6 - Agora, quando um botão for clicado, altere de forma assíncrona o estado deste botão de zero para um.
// 7 - Por fim, baseie-se no estado anterior ao atual para incrementar a contagem de cliques cada vez que um botão for clicado!

import React from 'react';
import './App.css';

// function printTextOne() {
//   console.log('Lorem ipsum dolor sit amet');
// }

// function printTextTwo() {
//   console.log('consectetur adipiscing elit');
// }

// function printTextThree() {
//   console.log('sed do eiusmod tempor incididunt ut labore et dolore magna aliqua');
// }

class App extends React.Component {

  constructor() {
    super()
    this.printTextOne = this.printTextOne.bind(this)
    this.printTextTwo = this.printTextTwo.bind(this)
    this.printTextThree = this.printTextThree.bind(this)

    this.state = {
      buttonOneClicks: 0,
      buttonTwoClicks: 0,
      buttonThreeClicks: 0,
    }
  }

  printTextOne() {
    console.log('Lorem ipsum dolor sit amet');
    this.setState((previousState, _props) => ({
      buttonOneClicks: previousState.buttonOneClicks += 1
    }))
  }

  printTextTwo() {
    console.log('consectetur adipiscing elit');
    this.setState((previousState, _props) => ({
      buttonTwoClicks: previousState.buttonTwoClicks += 1
    }))
  }

  printTextThree() {
    console.log('sed do eiusmod tempor incididunt ut labore et dolore magna aliqua');
    this.setState((previousState, _props) => ({
      buttonThreeClicks: previousState.buttonThreeClicks += 1
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.printTextOne}>Print text 1, totalClicks: {this.state.buttonOneClicks}</button>
        <button onClick={this.printTextTwo}>Print text 2, totalClicks: {this.state.buttonTwoClicks}</button>
        <button onClick={this.printTextThree}>Print text 3, totalClicks: {this.state.buttonThreeClicks}</button>
      </div>
    );
  }
}

export default App;
