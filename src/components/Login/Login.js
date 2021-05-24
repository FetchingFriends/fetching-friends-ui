import React, { Component } from 'react'
import './Login.css'
import { fetchUser } from '../../../src/apiCalls'
import { getUser, isLoading, hasErrored } from '../../actions'
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

  updateLoginValue = async (event, props) => {
    const { getUser, isLoading, hasErrored } = this.props
    try {
      hasErrored('')
      isLoading(true)
      const user = await fetchUser(this.state.login)
      isLoading(false)
      getUser(user)
    } catch (error) {
      isLoading(false)
      console.log(error.message)
      hasErrored(error.message)
    }
  }



  render() {
    return (
      <>
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
          <Link to='/homepage'>
            <button className='login button' onClick={this.updateLoginValue}>Login</button>
          </Link>
        </form>
      </>
    )
  }
}

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getUser,
    isLoading,
    hasErrored
  }, dispatch)
)

export const mapStateToProps = ({ selectedUser, errorMsg }) => ({
  selectedUser,
  errorMsg
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
