import React, { useState, useContext} from 'react';
import { Context } from '../index';

const LoginForm = () => {
    const [email, setEmail] = useState('test@test.ru');
    const [password, setPassword] = useState('test');
    const {store} = useContext(Context);
    //todo: подумать над неймингом 
    const handlerEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }
    const handlerPassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }
    return (
        <div>
            <input
                onChange={handlerEmail}
                value={email}
                type='text'
                placeholder='Email' />
            <input
                onChange={handlerPassword}
                value={password}
                type='password'
                placeholder='Password' />
            <button
                onClick={() => {
                    store.login(email, password)
                }}
            >
                Логин
            </button>
        </div>
    )
}

export default LoginForm;