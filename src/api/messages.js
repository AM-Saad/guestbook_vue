
export default class Message {
    static async messages() {
        try {
            const res = await fetch('http://localhost:3000/messages', {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            return await res.json()
        } catch (error) {
            console.log(error);
        }

    }
    static async message(id) {
        try {
            const res = await fetch(`http://localhost:3000/message?id=${id}`, {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
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
    static async newMessage(message, user) {
        try {
            const res = await fetch('http://localhost:3000/messages', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: message, user: user })
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
    static async deleteMessage(id, user) {
        console.log(user);
        try {
            const res = await fetch(`http://localhost:3000/messages?id=${id}&&user=${user}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
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

    static async updateMessage(id, message, user) {
        try {
            const res = await fetch(`http://localhost:3000/messages?id=${id}`, {
                method: 'Put',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: message, user: user })
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
    static async addReply(id, message, user) {
        try {
            const res = await fetch(`http://localhost:3000/messages/reply?id=${id}`, {
                method: 'Put',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: message, user: user })
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