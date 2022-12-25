import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import UserService from "../services/UserService";
export default class Store {
    user = {};
    isAuth = false;
    isLoading = false

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
        } catch (err) {
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
    /**
     * При обновлении страницы чтобы !не терять данные! из стора 
     * нужно будет повторно запрашивать данные о пользователе
     * @returns 
     */
    async checkAuth() {
        this.setIsLoading(true)
        try {
            if(localStorage.getItem('token') !== null) {
                /*
                Тут костыль эмулирующий запрос на рефреш токен через проверку на наличие акцес токена
                и запрос на юзера
                */
                console.log(localStorage.getItem('token'));
                this.setAuth(true)
            }
        } catch (err) {
            this.setAuth(false)
        }
        this.setIsLoading(false)
        return this.isAuth;
    }
}