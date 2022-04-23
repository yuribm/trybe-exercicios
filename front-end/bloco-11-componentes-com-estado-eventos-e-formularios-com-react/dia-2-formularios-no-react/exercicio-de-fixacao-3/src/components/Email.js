import React from "react";

class Email extends React.Component {
  render() {   

    const { value, handleChange } = this.props;
    console.log(this)

    let error = undefined;

    if(value.includes('.com') && !value.includes('@trybe')) error = 'precisa ser email válido da trybe'
    
    return (

      <label> Email
        
        <input
          type="email"
          value={value}
          name='email'
          onChange={handleChange}
        />

        <p>{error ? error : ''}</p>

      </label>


    );
  }
}

export default Email;