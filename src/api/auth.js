export default class Auth {
    static async signup(name, email, password) {
        try {
            const res = await fetch('http://192.168.1.3:3000/signup', {
                method: 'POST',
                body: JSON.stringify({ name: name, email: email, password: password })
            })
            const json = await res.json()

            if (res.status == 200 || res.status == 201) {

                return { msg: json.message, json, state: true, code: res.status }
            } else {
                return { state: false, msg: json.message, code: res.status }
            }
        } catch (error) {
            return { state: false, msg: 'Something went wrong, please try again', code: 500 }

        }
    }
    static async login(email, password) {
        try {
            const res = await fetch('http://192.168.1.3:3000/login', {
                method: 'POST',
                body: JSON.stringify({ email: email, password: password })
            })
            const json = await res.json()

            if (res.status == 200 || res.status == 201) {
                return { msg: json.message, json, state: true, code: res.status }
            } else {
                return { state: false, msg: json.message, code: res.status }
            }
        } catch (error) {
            return { state: false, msg: 'Something went wrong, please try again', code: 500 }

        }
    }
}