export default class Message {
    static async messages() {
        try {
            const res = await fetch('http://192.168.1.3:3000/messages', {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            console.log(res);
            return await res.json()
        } catch (error) {
            console.log(error);
        }

    }
}