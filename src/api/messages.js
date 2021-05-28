export default class Message {
    static async messages() {
        try {
            const res = await fetch('localhost:3000/messages', {
                method: 'GET',
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
}