import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {

  constructor() {
    super()
    this.state = {
      index: 0,
      pokemonType: 'Fire'
    }
  }

  byType = (element) => {
    const { pokemonType } = this.state;
    return element.type.includes(pokemonType)
  }

  handleNextPokemon() {
    const { index } = this.state;
    const { pokemons } = this.props

    this.setState((previousState) => {
      if (index === pokemons.filter(this.byType).length - 1) {
        return ({ index: 0 })
      }
      return ({ index: previousState.index + 1 })
    });
  }

  handleClickType(type) {
    this.setState(() => {
      return ({
        index: 0,
        pokemonType: type
      })
    })
  }

  render() {    

    const { pokemons } = this.props
    const { index } = this.state

    return (
      <div>

        <div>

          <p>Choose the pokemon's type</p>

          {pokemons.map((element) => {
            return <button
              key={element.id}
              onClick={() => this.handleClickType(element.type)}
            >
              {element.type}
            </button>
          })}

        </div>


        <button onClick={() => this.handleClickType('')}>
          All pokemons
        </button>

        <button onClick={() => this.handleNextPokemon()}>
          Next Pokemon
        </button>

        <Pokemon pokemon={pokemons.filter(this.byType)[index]} />

      </div>

    );
  }
}

export default Pokedex;