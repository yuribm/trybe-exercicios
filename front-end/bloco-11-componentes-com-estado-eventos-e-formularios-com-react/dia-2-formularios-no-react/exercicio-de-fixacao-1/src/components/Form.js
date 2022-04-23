import React from "react";

class Form extends React.Component {

  constructor() {
    super()
    this.state = {
      email: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({
      email: value
    })

  }

  render() {

    const { email } = this.state
    return (
      <form>

        <label> Choose your favorite HOF
          <select>
            <option value="map">map</option>
            <option value="filter">filter</option>
            <option value="find">find</option>
            <option value="some">some</option>
            <option value="every">every</option>
            <option value="reduce">reduce</option>
            <option value="foreach">foreach</option>
          </select>
        </label>

        <label> Email
          <input
            type="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>

        <label>Password
          <input type="password" />
        </label>

        <textarea
          cols="30"
          rows="10"
          placeholder="area for feedback">
        </textarea>

      </form>
    );
  }
}

export default Form;