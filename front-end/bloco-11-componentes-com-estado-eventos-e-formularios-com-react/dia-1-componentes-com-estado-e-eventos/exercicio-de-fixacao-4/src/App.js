// OBS: para este exercício, foi copiado o código do exercício de fixação 3

// Defina uma lógica que estabeleça que, quando o número de cliques no botão for par, ele deve ser verde.
// A cor atual do botão deve ser impressa num console.log() de dentro da função do evento que lida com o clique. Faça isso acontecer!
// Dica: Lembre-se de substituir a referência à função, no evento, por uma callback que invoca!

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
    }), (() => console.log(this.defineColor(this.state.buttonOneClicks))))
    
  }

  printTextTwo() {
    console.log('consectetur adipiscing elit');
    this.setState((previousState, _props) => ({
      buttonTwoClicks: previousState.buttonTwoClicks += 1
    }), () => console.log(this.defineColor(this.state.buttonTwoClicks)))
  }

  printTextThree() {
    console.log('sed do eiusmod tempor incididunt ut labore et dolore magna aliqua');
    this.setState((previousState, _props) => ({
      buttonThreeClicks: previousState.buttonThreeClicks += 1
    }), () => console.log(this.defineColor(this.state.buttonThreeClicks)))
  }

  defineColor(clicks) {
    return clicks % 2 === 0 ? 'green' : 'red'
  }

  render() {

    const { buttonOneClicks, buttonTwoClicks, buttonThreeClicks } = this.state

    return (
      <div>

        <button
          onClick={this.printTextOne}
          style={{ backgroundColor: this.defineColor(buttonOneClicks) }}
        >
          Print text 1, totalClicks: {this.state.buttonOneClicks}
        </button>

        <button
          onClick={this.printTextTwo}
          style={{ backgroundColor: this.defineColor(buttonTwoClicks) }}
        >
          Print text 2, totalClicks: {this.state.buttonTwoClicks}
        </button>

        <button
          onClick={this.printTextThree}
          style={{ backgroundColor: this.defineColor(buttonThreeClicks) }}
        >
          Print text 3, totalClicks: {this.state.buttonThreeClicks}
        </button>

      </div>
    );
  }
}

export default App;
