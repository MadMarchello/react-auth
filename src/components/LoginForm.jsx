import React, { useState, useContext} from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

import { Context } from '../index';

const Copyright = (props) => {
    return (
        <Typography 
            variant="body2" 
            color="text.secondary"
            align="center"
            {...props}
        >
            {'Copyright © '}
            Платформа "Образование"
            {' '}
            {new Date().getFullYear()}.
        </Typography>
    )
}
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
        <Container maxWidth="xs">
            <CssBaseline />
            <Box  
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{m:1, bgcolor:'secondary.main'}}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Авторизуйся!
                </Typography>
            </Box>
            <Box>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Почта"
                    name="email"
                    autoComplete='email'
                    value={email}
                    onChange={handlerEmail}
                />
                <TextField 
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Пароль"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={handlerPassword}    
                >
                </TextField>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() => {
                        store.login(email, password)
                    }}
                >
                     Войти!
                </Button>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    )
}

export default LoginForm;