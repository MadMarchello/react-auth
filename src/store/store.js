import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";

export default class Store {
    user = {};
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

    setIsLoading(bool) {
        this.setIsLoading = bool;
    }

    async login(email, password) {
        try {
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);//значит авторизованы
            this.setUser(response.data.user);//получили данные о пользователе
        } catch (err) {
            alert(`Произошла ошибка авторизации ${err}`)
        }
    }

    async registration(email, password) {
        try {
            const response = await AuthService.registration(email, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch(err) {
            alert(`Произошла ошибка регистрации ${err}`)
        }
    }
    async logout() {
        try {
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({});
        } catch {
            alert('Произошла ошибка выхода')
        }
    }
    //проверяем свежесть нашего access токена
    async checkAuth() {
        try {
            if(localStorage.getItem('token') !== null) {
                console.log(localStorage.getItem('token'));
                this.setAuth(true)
            }
        } catch (err) {
            this.setAuth(false)
        }
        return this.isAuth;
    }
}