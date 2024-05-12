import React, { useState } from 'react';
import './Form.css'
import axios from "axios";
const Login = ({toggleRegister, toggleAdminPage, setLoginButtons, setloginName, toggleHomeSearchSections}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const Login_URL = 'http://localhost:3030/login';

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (username === "admin" && password === "admin") {
                // If both username and password are "admin", toggle admin page
                toggleAdminPage(true);
            } else {
                const userURI = Login_URL+":username";
                const response = await axios.post(userURI, { username, password });
                console.log(response.data);

                if (response.status === 200) {
                    // If the status code is 200, the login was successful
                    // You can handle successful login accordingly
                    setLoginButtons(true);
                    setloginName(username)
                    console.log("Login successful");
                    // Redirect or do any other actions for successful login
                } else if (response.status === 235) {
                    // If the status code is 235, the password is wrong
                    // You can handle this case accordingly
                    console.error('Login failed:', response.data);
                    alert("Login failed")
                    // Optionally, display an error message to the user
                } else if (response.status === 234) {
                    // If the status code is 234, the username does not exist
                    // You can handle this case accordingly
                    console.error('Login failed:', response.data);
                    // Optionally, display an error message to the user
                } else {
                    // Handle other status codes if needed
                    console.error('Unexpected status code:', response.status);
                    // Optionally, display an error message to the user
                }
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle other errors (e.g., network issues)
            // Optionally, you can display a generic error message to the user
        }
    };



    return(
        <div className="container2">

            <form>
                <h1>Login</h1>
                <div className='group-form'>
                    <label className="">Username</label>
                    <input
                        type="text"
                        className="input-form"
                        placeholder="Enter your username"
                        value={username}
                        onChange={handleUsernameChange}
                        required
                    />
                </div>

                <div className='group-form'>
                    <label className="">Password</label>
                    <input
                        type="password"
                        className='input-form'
                        placeholder="**"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <div>
                    <button className="subtn" id={"subbut"} onClick={handleSubmit}>Login</button>
                </div>

                <div>
                    <label>Dont have an account?</label>
                    <button className="btn" id={"loginbut"}  onClick={toggleRegister}>Register</button>
                </div>
            </form>

        </div>


    );
};

export default Login;