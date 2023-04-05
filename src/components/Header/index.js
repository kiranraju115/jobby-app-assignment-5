import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const removeAccess = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <nav className="nav-header-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>
      <div className="lg-container">
        <ul className="lg-list">
          <li className="list-item">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="list-item">
            <Link to="/jobs" className="link">
              Jobs
            </Link>
          </li>
        </ul>
      </div>
      <button type="button" className="logout-btn" onClick={removeAccess}>
        Logout
      </button>
    </nav>
  )
}
export default withRouter(Header)
