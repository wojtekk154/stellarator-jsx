import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import './style.css';

function LoginForm(props) {
    let login, password;

    return (
        <form>
            <h1>Login Form:</h1>

            <Input 
                type="text"
                label="Login"
                placeholder="username"
            />
            <Input 
                type="password"
                label="Password"
                placeholder="Password"
            />
            <button onClick={()=>props.submitForm(login, password)}>Login</button>

        </form>
    );
}

export default LoginForm;