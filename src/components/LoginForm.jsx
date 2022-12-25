import React, { useState, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
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
    const { store } = useContext(Context);

    const {
        register,
        formState: {
            errors, isValid
        },
        handleSubmit,
    } = useForm({
        mode: "onBlur"
    });

    const onSubmit = (data) => {
        console.log(data);
        store.login(data.email, data.password);
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
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Авторизуйся!
                </Typography>
            </Box>
            <Box onSubmit={handleSubmit(onSubmit)} component="form" sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Почта"
                    name="email"
                    {
                        ...register("email", {
                            required: "Поле обязательно к заполнению",
                            pattern:  {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Введите корректный e-mail',
                            }
                        })
                    }
                    error={errors?.email ? true : false}
                    helperText={errors?.email?.message}
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
                    {
                        ...register("password", {
                            required: "Поле обязательно к заполнению",
                            minLength: {
                                value: 4, 
                                message: "Минимальный размер пароля 4 символов"
                            }
                        })
                    }
                    error={errors?.password ? true : false}
                    helperText={errors?.password?.message}

                >
                </TextField>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    disabled={!isValid}
                >
                    Войти!
                </Button>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    )
}
export default LoginForm;