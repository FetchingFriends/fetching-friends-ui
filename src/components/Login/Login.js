import React, { Component } from 'react'
import './Login.css'
import { fetchUser } from '../../../src/apiCalls'
import { getUser } from '../../actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: '',
      error: ''
    }
  }

  handleChange = event => {
    this.setState({ login: event.target.value })
  }

  updateLoginValue = event => {
    event.preventDefault()
    fetchUser(this.state.login)
    .then(user => {
      this.props.getUser(user)
    })
    .catch(error => this.setState( { error: error.message }))
  }

  render() {
    return (
      <form className='login-form'>
        <input
          className='username-login input-login'
          type='text'
          placeholder='Username'
          aria-label='Username Input'
          id='login'
          name='login'
          value={this.state.login}
          onChange={event => this.handleChange(event)}
        />
        <Link to='/user-home'>
          <button className='login button' onClick={this.updateLoginValue}>Login</button>
        </Link>
      </form>
    )
  }
}

export const mapStateToProps = ({ selectedUser }) => ({
  selectedUser
})


export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getUser
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
