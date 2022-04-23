import React from "react";

class Form extends React.Component {

  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',

    }

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleChange({ target }) {
    const { value, name } = target;

    let verifiedValue = (name === 'name') ? value.toUpperCase() : value;
    // para a linha abaixo, utilizei o site bobbyhadz blog, disponível em: https://bobbyhadz.com/blog/javascript-remove-special-characters-from-string
    verifiedValue = (name === 'address') ? value.replace(/[^a-zA-Z0-9 ]/g, '') : verifiedValue;

    this.setState({
      [name]: verifiedValue
    })
  }

  handleBlur({ target }) {
    const { value, name } = target;
    if (parseInt(value[0])) {
      this.setState({
        [name]: ''
      })
    }
  }

  render() {

    const { name, email, cpf, address, city } = this.state

    return (
      <form>
        <fieldset>

          <label htmlFor="name"> Name
            <input
              type="text"
              maxLength={40}
              name='name'
              id='name'
              value={name}
              onChange={this.handleChange}
              required
            />
          </label>

          <label htmlFor="email">Email
            <input
              type="email"
              maxLength={50}
              name='email'
              id='email'
              value={email}
              onChange={this.handleChange}
              required
            />
          </label>

          <label htmlFor="cpf">CPF
            <input
              type="text"
              maxLength={11}
              name='cpf'
              id='cpf'
              value={cpf}
              onChange={this.handleChange}
              required
            />
          </label>

          <label htmlFor="address">Address
            <input
              type="text"
              maxLength={200}
              name='address'
              id='address'
              value={address}
              onChange={this.handleChange}
              required
            />
          </label>

          <label htmlFor="city">City
            <input
              type="text"
              maxLength={28}
              name='city'
              id='city'
              value={city}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              required
            />
          </label>

          <label htmlFor="states">State
            <select
              name="states"
              id="states">

                <option value=""></option>

            </select>
          </label>

        </fieldset>
      </form>
    );
  }
}

export default Form;