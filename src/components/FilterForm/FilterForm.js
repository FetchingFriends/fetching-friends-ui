import { Component } from 'react'
import './FilterForm.css'

class FilterForm extends Component {
  constructor({ filterPets }) {
    super() 
    this.state = {
      gender: '',
      fixed: '',
      age: '',
      trained: '',
      kids: '',
      animals: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return(
      <form>
        <label for="gender">Gender</label>
        <select onChange={this.handleChange} id="gender" name="gender" className="ddl">
          <option value=''>All</option>
          <option value="Male">M</option>
          <option value="Female">F</option>
        </select>
        <label for="fixed">Fixed</label>
        <select onChange={this.handleChange} id="fixed" name="fixed" className="ddl">
          <option value=''>All</option>
          <option value="true">yes</option>
          <option value="false">no</option>
        </select>
        <label for="age">Age</label>
        <select onChange={this.handleChange} id="age" name="age" className="ddl">
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
        <label for="trained">House Trained</label>
        <select onChange={this.handleChange} id="trained" name="trained" className="ddl">
          <option value=''>All</option>
          <option value="true">yes</option>
          <option value="false">no</option>
        </select>
        <label for="kids">Good with Kids</label>
        <select onChange={this.handleChange} id="kids" name="kids" className="ddl">
          <option value=''>All</option>
          <option value="true">yes</option>
          <option value="false">no</option>
        </select>
        <label for="animals">Good with Animals</label>
        <select onChange={this.handleChange} id="animals" name="animals" className="ddl">
          <option value=''>All</option>
          <option value="true">yes</option>
          <option value="false">no</option>
        </select>
        <button className="button" onClick={(e) => this.props.filterPets(this.state, e)}>Filter</button>
      </form>
    )
  }
}

export default FilterForm;