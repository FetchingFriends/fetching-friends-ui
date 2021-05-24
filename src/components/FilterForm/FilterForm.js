import { Component } from 'react'

class FilterForm extends Component {
  constructor({ filterPets }) {
    super() 
    this.state = {
      gender: '',
      fixed: '',
      age: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return(
      <form>
        <label for="gender">Gender</label>
        <select onChange={this.handleChange} id="gender" name="gender">
          <option value=''>All</option>
          <option value="Male">M</option>
          <option value="Female">F</option>
        </select>
        <label for="fixed">Fixed</label>
        <select onChange={this.handleChange} id="fixed" name="fixed">
          <option value=''>All</option>
          <option value="true">yes</option>
          <option value="false">no</option>
        </select>
        <label for="age">Age</label>
        <select onChange={this.handleChange} id="age" name="age">
          <option value=''>All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
        <button onClick={(e) => this.props.filterPets(this.state, e)}>Filter</button>
      </form>
    )
  }
}

export default FilterForm;