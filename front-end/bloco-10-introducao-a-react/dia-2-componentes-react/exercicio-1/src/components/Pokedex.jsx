import React from 'react';
import Pokemon from './Pokemon';
import pokemons from '../data/data'

class Pokedex extends React.Component {
  render() {
    return (
      <>
        {pokemons.map((element) => {
          const { name, type, averageWeight, image, moreInfo } = element;
          return (
            <Pokemon
              key={ name }
              name={ name }
              type={ type }
              averageWeight={ averageWeight }
              image={ image }
              moreInfo={ moreInfo }
            />
        );
        })}
      </>
    );
  }
}

export default Pokedex