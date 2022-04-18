// OBS: para este exercício, foi copiado o código do exercício de fixação 1

// 3 - Declare dentro da classe do seu componente dos exercícios de fixação acima a função que lida com o evento que antes era lidado por uma função do lado de fora da classe!
// 4 - Garanta acesso ao objeto this na função que você declarou.

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
  }

  printTextOne() {
    console.log('Lorem ipsum dolor sit amet');
  }

  printTextTwo() {
    console.log('consectetur adipiscing elit');
  }

  printTextThree() {
  console.log('sed do eiusmod tempor incididunt ut labore et dolore magna aliqua');
}

  render() {
    return (
      <div>
        <button onClick={this.printTextOne}>Print text 1</button>
        <button onClick={this.printTextTwo}>Print text 2</button>
        <button onClick={this.printTextThree}>Print text 3</button>
      </div>
    );
  }
}

export default App;
