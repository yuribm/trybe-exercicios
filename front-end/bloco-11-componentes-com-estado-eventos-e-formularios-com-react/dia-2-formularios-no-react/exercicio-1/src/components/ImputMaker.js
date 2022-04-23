import React from "react";

class ImputMaker extends React.Component{
  render() {
    return(
      <label htmlFor={name}> {name}
      <input
        type={type}
        maxLength={40}
        name={name}
        id={name}
        value={name}
        onChange={handleChange}
        required
      />
    </label>
    );
  }
}

export default ImputMaker;