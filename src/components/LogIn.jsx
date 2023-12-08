import React from 'react';
import './LogIn.css';
// import { Link, withRouter } from 'react-router-dom'; // Import 
import { auth, firestore } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth"

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: null,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    try {
      signInWithEmailAndPassword(auth, username, password).then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          this.props.history.push('/');
        }
      })
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <div className="grid">
        <form className="form login" onSubmit={this.handleSubmit}>
        <div className="form__field">
            <h2 className='header_name'>Yurta</h2 >
            <label htmlFor="login__username">
              <span className="hidden">Username</span>
            </label>
            <input
              id="login__username"
              type="text"
              name="username"
              className="form__input"
              placeholder="Username"
              required
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form__field">
            <label htmlFor="login__password">
              <span className="hidden">Password</span>
            </label>
            <input
              id="login__password"
              type="password" 
              name="password"
              className="form__input"
              placeholder="Password"
              required
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <input type="submit" value="Sign In" className='loginButton'/>
          {this.state.error && <p>{this.state.error}</p>}
        </form>
       

      </div>
    );
  }
}

export default LogIn; 

