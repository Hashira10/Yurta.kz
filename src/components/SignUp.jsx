import React from 'react';
import './SignUp.css'; // Измените название файла CSS, если необходимо
import { Link } from 'react-router-dom';
import { auth } from '../firebase'; // Импортируем экземпляр auth из вашего файла firebase.js
import { createUserWithEmailAndPassword } from "firebase/auth"

class SignUp extends React.Component {
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
      // Используем createUserWithEmailAndPassword для регистрации нового пользователя
      createUserWithEmailAndPassword(auth, username, password).then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          this.props.history.push('/'); // Переход на главную страницу после успешной регистрации
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
            <label htmlFor="signup__username">
              <span className="hidden">Username</span>
            </label>
            <input
              id="signup__username"
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
            <label htmlFor="signup__password">
              <span className="hidden">Password</span>
            </label>
            <input
              id="signup__password"
              type="password" 
              name="password"
              className="form__input"
              placeholder="Password"
              required
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form__field">
            <input type="submit" value="Sign Up" className='loginButton'/>
          </div>
          {this.state.error && <p>{this.state.error}</p>}
        </form>
        <Link to="/login">Already have an account? Sign In</Link>
      </div>
    );
  }
}

export default SignUp;
