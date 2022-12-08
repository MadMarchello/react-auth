import $api from '../http'

export default class AuthService {
    static async login(email, password) {
        return $api.post('/login', {
            email: email,
            password: password
        })
    }

    static async registration(email, password) {
        return $api.post('/register', { 
            email: email,
            password: password 
        })
    }

}