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
}