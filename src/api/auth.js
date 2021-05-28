export default class Auth {
    static async signup(name, email, password) {
        try {
            const res = await fetch('http://192.168.1.3:3000/signup', {
                method: 'POST',
                body: JSON.stringify({ name: name, email: email, password: password })
            })
            console.log(res);
            return await res.json()
        } catch (error) {
            console.log(error);
        }
    }
}