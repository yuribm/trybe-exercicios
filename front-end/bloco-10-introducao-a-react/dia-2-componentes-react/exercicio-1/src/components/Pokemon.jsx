import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image, moreInfo } = this.props;
    const { value: weight, measurementUnit: unit } = averageWeight;
    const alternativeText = `${name}'s image`;
    return (
      <div className="pokemonContainer">
        <div className="pokemon">
          <p>Name: {name}</p>
          <p>Type: {type}</p>
          <p>Average Weight: {weight}{unit}</p>
          <p>Acess <a href={moreInfo} target="_blank" rel="noreferrer noopener">here</a> for more information</p>
        </div>
        <img src={image} alt={alternativeText} />
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  averageWeight: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
}

export default Pokemon