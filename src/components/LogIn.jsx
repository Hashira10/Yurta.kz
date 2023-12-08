import React, { useState, useMemo } from 'react';
import './LogIn.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth, firestore } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LogIn = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const memoizedSignIn = useMemo(
        () =>
            async () => {
                try {
                    const authResult = await signInWithEmailAndPassword(auth, username, password);
                    if (authResult) {
                        navigate('/');
                    }
                } catch (error) {
                    setError(error.message);
                }
            },
        [username, password, navigate]
    );

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        name === 'username' ? setUsername(value) : setPassword(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        memoizedSignIn();
    };

    return (
        <div className="grid">
            <form className="form login" onSubmit={handleSubmit}>
                <div className="form__field">
                    <h2>Yurta</h2>
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
                        value={username}
                        onChange={handleInputChange}
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
                        value={password}
                        onChange={handleInputChange}
                    />
                </div>
                <input type="submit" value="Sign In" className="loginButton" />
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default LogIn;

