import { Component } from 'react'
import "./ApplicationForm.css"
import { connect } from 'react-redux'
import { postApplication } from '../../apiCalls'
import { Link } from 'react-router-dom'


class ApplicationForm extends Component {
  constructor(props) {
    super()
    this.state = {
      message: '',
      userId: props.selectedUser.selectedUser.data.id,
      petId: props.id,
      successfulSubmit: false 
    }
  }
  handleChange = e =>  {
        this.setState({ [e.target.name]: e.target.value })
    }

    postForm = (e) => {
      if(this.state.message !== ''){
        e.preventDefault()
        postApplication(this.state)
        this.setState({successfulSubmit: true})
      }
      
    }
    
  render() {
    return (
      <>
      {!this.state.successfulSubmit && 
      <form>
        <input
          required
          type='text'
          placeholder='Why would you be a good fit for this pet?'
          name='message'
          value={this.state.message}
          onChange={e => this.handleChange(e)}
        />
        <button onClick={(e) => this.postForm(e)} type="submit">Submit</button>
      </form>
      }
      {this.state.successfulSubmit && 
      <>
        <h1>Success!</h1>
        <Link to={`/homepage`}>
          <button className="button">Home</button>
        </Link>
      </>
      }
      </>
    )
  }
}

const mapStateToProps = (selectedUser) => ({
  selectedUser
})

export default connect(mapStateToProps)(ApplicationForm)