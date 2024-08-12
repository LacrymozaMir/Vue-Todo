import axios from "axios"

export const fetchTodo = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?userId=1') 
        return response.data;
    } catch(error) {
        console.log(error);
    }
}