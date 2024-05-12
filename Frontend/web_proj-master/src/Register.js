import React, { useState } from "react";
import axios from "axios";

const Register = ({ toggleLogin, setLoginButtons, setloginName }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const Signup_URL = 'http://localhost:3030/login';

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(Signup_URL, { username, password });
            console.log(response.data);
            // Optionally, you can redirect to the login page after successful signup
            toggleLogin(true);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container2">
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <div className="group-form">
                    <label>Username</label>
                    <input
                        className="input-form"
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="group-form">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="input-form"
                        placeholder="**"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button type="submit" id={"subbut"} className="subtn">Signup</button>
                </div>
                <div>
                    <label>Have an account?</label>
                    <button className="btn" id={"loginbut"} onClick={toggleLogin}>Login</button>
                </div>
            </form>
        </div>
    );
};

export default Register;
