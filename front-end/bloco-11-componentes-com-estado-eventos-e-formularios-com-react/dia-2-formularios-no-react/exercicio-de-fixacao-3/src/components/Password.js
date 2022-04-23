import React from "react";

class Password extends React.Component {
  render() {

    const { value, handleChange } = this.props;

    let error1 = undefined
    let error2 = undefined
    if (value.length < 8) error1 = 'minimum of 8 characters'
    if (
      !value.includes('#')
      && !value.includes('!')
      && !value.includes('@')
      && !value.includes('$')
      && !value.includes('%')
      && !value.includes('&')
      && !value.includes('*')
      ) error2 = 'must contain characters'

    return (
      <label>Password
        <input
          type="password"
          name='password'
          value={value}
          onChange={handleChange}
        />

        <p>{error1 ? error1 : ''}</p>
        <p>{error2 ? error2 : ''}</p>

      </label>
    );
  }
}

export default Password;