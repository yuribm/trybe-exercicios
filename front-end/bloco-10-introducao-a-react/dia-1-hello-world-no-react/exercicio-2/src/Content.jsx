import React, { Component } from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const infos = conteudos.map((element) => {
  const { conteudo, bloco, status } = element;
  return (
    <div key={conteudo} className='card'>
      <p>{`O conteúdo é: ${conteudo}`}</p>
      <p>{`Status: ${status}`}</p>
      <p>{`Bloco: ${bloco}`}</p>
    </div>
  )
})

class Content extends Component {
  render() {
    return (
      <>
        {infos}
      </>
    )
  }
}

export default Content