import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import "../../assets/fontawesome/css/all.css";
import logo from "../../assets/logo/logo100_100.png";

class Login extends React.Component {
  render() {
    return (
      <div>
        <section className="login-page">
          <div className="login-wrapper">
            <form className="form">
              <img src={logo} alt="Logo" />
              <h1>TiuShop Management</h1>
              <div className="input-group">
                <input
                  type="text"
                  name="loginUser"
                  id="loginUser"
                  required
                  maxLength={100}
                  autoFocus
                />
                <label htmlFor="loginUser">
                  <i className="fas fa-user" /> Username
                </label>
              </div>
              <div className="input-group">
                <input
                  type="password"
                  name="loginPassword"
                  id="loginPassword"
                  required
                  maxLength={100}
                />
                <label htmlFor="loginPassword">
                  <i className="fas fa-lock" /> Password
                </label>
              </div>
              <input
                type="submit"
                defaultValue="Login"
                className="submit-btn"
              />
              <br />
              <br />
              <a href="#forgot-password" className="forgot-password">
                Forgot Password?
              </a>
            </form>
            <div id="forgot-password">
              <form className="form">
                <a href="#" className="close">
                  ×
                </a>
                <h1>Reset Password</h1>
                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    maxLength={100}
                    autoComplete="off"
                  />
                  <label htmlFor="email">
                    <i className="fas fa-envelope" /> Email
                  </label>
                </div>
                <input
                  type="submit"
                  defaultValue="Submit"
                  className="submit-btn"
                />
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
