import React from "react";

class Form extends React.Component {

  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      text: '',
      select: '',
      studied: false,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value
    this.setState({
      [name]: value
    })

  }

  render() {

    const { email, password, text, select, studied } = this.state
    return (
      <form>

        <label> Choose your favorite HOF
          <select
            value={select}
            name='select'
            onChange={this.handleChange}
          >
            <option value="map">map</option>
            <option value="filter">filter</option>
            <option value="find">find</option>
            <option value="some">some</option>
            <option value="every">every</option>
            <option value="reduce">reduce</option>
            <option value="foreach">foreach</option>
          </select>
        </label>

        <label>I already studied this hof
          <input
            type='checkbox'
            name='studied'
            checked={studied}
            onChange={this.handleChange}
          />
        </label>

        <fieldset>

          <label> Email
            <input
              type="email"
              value={email}
              name='email'
              onChange={this.handleChange}
            />
          </label>

          <label>Password
            <input
              type="password"
              name='password'
              value={password}
              onChange={this.handleChange}
            />
          </label>

        </fieldset>

        <textarea
          cols="30"
          rows="10"
          name='text'
          value={text}
          placeholder="area for feedback"
          onChange={this.handleChange}
        />

        <label>Upload a file
          <input
            type='file'
          />
        </label>

      </form>
    );
  }
}

export default Form;