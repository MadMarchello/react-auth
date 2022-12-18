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
import useInput from '../utils/useInput';

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
    
    const email = useInput('');
    const password = useInput('');
    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');
    const {store} = useContext(Context);
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
                    //todo сделать генератор ошибок
                    helperText="Поле не может быть пустым"
                    margin="normal"
                    required
                    fullWidth
                    label="Почта"
                    name="email"
                    value={email.value}
                    onChange={email.onChange}
                    onBlur={email.onBlur}
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
                    value={password.value}
                    onChange={password.onChange}
                    onBlur={password.onBlur}                >
                </TextField>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() => {
                        store.login(email, password)
                        //alert(email.value)
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