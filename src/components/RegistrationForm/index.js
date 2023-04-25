// Write your JS code here

import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    isRegistrar: true,
    firstName: false,
    lastName: false,
    firstNameInput: '',
    lastNameInput: '',
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {firstNameInput, lastNameInput} = this.state
    if (firstNameInput && lastNameInput !== '') {
      this.setState({isRegistrar: false})
    }
    if (firstNameInput === '') {
      this.setState({firstName: true})
    }
    if (lastNameInput === '') {
      this.setState({lastName: true})
    }
  }

  onSubmitAnotherResponse = () => {
    this.setState({isRegistrar: true})
  }

  onHandlerEvent = event => {
    if (event.target.value === '') {
      this.setState({firstName: true})
    } else {
      this.setState({firstName: false})
    }
  }

  onHandlerLastName = event => {
    if (event.target.value === '') {
      this.setState({lastName: true})
    } else {
      this.setState({lastName: false})
    }
  }

  onChangeFirstName = event => {
    this.setState({firstNameInput: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastNameInput: event.target.value})
  }

  renderRegistrarForm = () => {
    const {firstName, lastName, lastNameInput, firstNameInput} = this.state
    const errorMsg = firstName ? 'Required ' : null
    const lastNameErrorMsg = lastName ? 'Required ' : null

    console.log(firstNameInput)

    return (
      <form className="form" onSubmit={this.onSubmitForm}>
        <label htmlFor="first name" className="label">
          First Name
        </label>
        <input
          id="first name"
          className="input"
          type="text"
          value={firstNameInput}
          onBlur={this.onHandlerEvent}
          onChange={this.onChangeFirstName}
          placeholder="FirstName"
        />
        <p className="error-msg">{errorMsg}</p>
        <label htmlFor="last name" className="label">
          Last Name
        </label>
        <input
          id="last name"
          className="input"
          type="text"
          value={lastNameInput}
          onBlur={this.onHandlerLastName}
          onChange={this.onChangeLastName}
          placeholder="LastName"
        />
        <p className="error-msg">{lastNameErrorMsg}</p>
        <div className="button">
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    )
  }

  renderSubmitSuccess = () => (
    <div className="submit-another-response">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted successfully</p>
      <div>
        <button
          type="submit"
          className="another-submit-btn"
          onClick={this.onSubmitAnotherResponse}
        >
          Submit Another Response
        </button>
      </div>
    </div>
  )

  render() {
    const {isRegistrar} = this.state

    return (
      <div className="app-container">
        <h1>RegistrationForm</h1>
        <div className="registrar-card">
          {isRegistrar
            ? this.renderRegistrarForm()
            : this.renderSubmitSuccess()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
