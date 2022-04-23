import React from "react";
import Email from "./Email";
import Password from "./Password";

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

          <Email
          value={email}
          handleChange={this.handleChange}          
          />

          <Password
          value={password}
          handleChange={this.handleChange}          
          />

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