import React from 'react';

class Muse extends React.Component {

  constructor() {
    super()
    this.state = {
      loading: true,
      muse: {},
    }
    
    this.showMuse = this.showMuse.bind(this)
  }

  async componentDidMount() {
    const response = await fetch('https://api.randomuser.me/')
    const data = await response.json()
    const newMuse = data.results[0]

    this.setState({
      muse: newMuse,
      loading: false,
    })
  }

  shouldComponentUpdate(_nextProps, { muse : {dob: {age}}}) {    
    if(age > 50) return false
    return true  
  }

  showMuse({ name: { first, last }, picture: { large }, email, dob: { age } }) {
    return (
      <>

        <p>Name: {first} {last}</p>
        <img src={large} alt="muse" />
        <p>Email: {email}</p>
        <p>Age: {age}</p>
      </>
    )
  }

  render() {
    
    const { loading, muse } = this.state

    return (

      <div>{loading ? 'Loading...' : this.showMuse(muse)}</div>

    );
  }
}

export default Muse;