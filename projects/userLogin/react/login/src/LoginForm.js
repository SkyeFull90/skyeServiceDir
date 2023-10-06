import React from "react";
import {useState} from "react";

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loginAttempts, setLoginAttempts] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === 'vaild_username' && password === 'vaild_password'){
            //login and move to next page
        } else {
            setLoginAttempts(loginAttempts +1);
            if (loginAttempts === 5){
                setError('Too many failed login attempts, you are now locked out.');
            } else {
                setError('Invalid login, please try again')
            }
        }
    };
    return (
        <form onSubmit={handleSubmit} className="flex space-x-4">
            <label>
                Email :
                <input
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </label>
            <br />
            <label>
                Password :
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </label>
            <br />
            <button className="bg-indigo-800 rounded-lg" type="submit">Login</button>
            {error && <div>{error}</div>}
        </form>
    );
}
export default LoginForm;