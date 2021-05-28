export default class Message {
    static async messages() {
        try {
            const res = await fetch('http://localhost:3000/messages', {
                method: 'get',

            })
            console.log(res);
            return await res.json()
        } catch (error) {
            console.log(error);
        }

    }
    static async newMessage(message, user) {
        try {
            const res = await fetch('http://localhost:3000/messages', {
                method: 'POST',
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
    static async deleteMessage(message, user) {
        try {
            const res = await fetch('http://localhost:3000/messages', {
                method: 'Delete',
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