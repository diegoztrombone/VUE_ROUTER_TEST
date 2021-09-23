import axios from 'axios'
export default async () => {
    const result = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(result)
    return result.data.map(user => {
        return {
            id: user.id,
            name: user.name
        }
    })
}
