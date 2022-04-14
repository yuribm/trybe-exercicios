// 1 - Crie uma aplicação React com npx create-react-app fancy-buttons . Altere o componente App.js para que seja um componente de classe e contenha um botão associado a um evento que imprime um texto qualquer via console.log() . Não precisa se preocupar com a sintaxe correta para funções de eventos por enquanto!!
// 2 - Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log() .

import React from 'react';
import './App.css';

function printTextOne() {
  console.log('Lorem ipsum dolor sit amet');
}

function printTextTwo() {
  console.log('consectetur adipiscing elit');
}

function printTextThree() {
  console.log('sed do eiusmod tempor incididunt ut labore et dolore magna aliqua');
}

class App extends React.Component {
  render() {    
    return (      
      <div>
        <button onClick={printTextOne}>Print text 1</button>
        <button onClick={printTextTwo}>Print text 2</button>
        <button onClick={printTextThree}>Print text 3</button>
      </div>
    );
  }
}

export default App;
