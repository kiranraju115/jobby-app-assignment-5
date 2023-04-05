import {Component} from 'react'

import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class Login extends Component {
  state = {
    userName: '',
    passWord: '',
    showError: 'false',
    errorMsg: '',
  }

  userNameChange = event => {
    this.setState({userName: event.target.value})
  }

  passwordChange = event => {
    this.setState({passWord: event.target.value})
  }

  onSubmit = async event => {
    event.preventDefault()
    const {userName, passWord} = this.state

    const userDetails = {
      username: userName,
      password: passWord,
    }

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      const jwtToken = data.jwt_token
      const {history} = this.props
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      history.replace('/')
    } else {
      const message = data.error_msg
      this.setState({showError: true, errorMsg: message})
    }
  }

  render() {
    const {username, password, showError, errorMsg} = this.state

    if (Cookies.get('jwt_token') !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="main-login-container">
        <div className="login-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <form className="login-form" onSubmit={this.onSubmit}>
            <label className="label" htmlFor="username">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              className="input-element"
              onChange={this.userNameChange}
              value={username}
              placeholder="username"
            />
            <label className="label" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              className="input-element"
              onChange={this.passwordChange}
              value={password}
              placeholder="password"
            />
            <button type="submit" className="login-button">
              Login
            </button>
            {showError && <p className="error-display">{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default Login
