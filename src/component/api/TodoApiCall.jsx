
import axios from "axios";


const apiClient = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
    },
});


export default async function apiCallForTodoApi() {
    try {
        const { data } = await apiClient.get(`/hello-world-bean`);

        console.log("API response:", data);

        return data ?? null;
    } catch (error) {
        console.error("API error:", error?.response || error);
        throw error;
    }
}   

export  async function apiCallForTodoApiWithPathVariable(username) {
    try {
        const { data } = await apiClient.get(`/users/${username}/todos`);

        console.log("API response:", data);

        return data ?? null;
    } catch (error) {
        console.error("API error:", error?.response || error);
        throw error;
    }
}


export  async function apiCallForTodoApiForDeleteTodo(username, todoId) {
    try {
        const { data } = await apiClient.delete(`/users/${username}/todos/${todoId}`);

        console.log("API response:", data);

        return data ?? null;
    } catch (error) {
        console.error("API error:", error?.response || error);
        throw error;
    }
}

export  async function retreiveTodoApi(username, todoId) {
    try {
        const { data } = await apiClient.get(`/users/${username}/todos/${todoId}`);

        console.log("API response:", data);

        return data ?? null;
    } catch (error) {
        console.error("API error:", error?.response || error);
        throw error;
    }
}



export  async function updateTodoApi(username, todoId, todoData) {
    try {
        const { data } = await apiClient.put(`/users/${username}/todos/${todoId}`, todoData);

        console.log("API response:", data);

        return data ?? null;
    } catch (error) {
        console.error("API error:", error?.response || error);
        throw error;
    }
}

export  async function createTodoApi(username, todoData) {
    try {
        const { data } = await apiClient.post(`/users/${username}/todos`, todoData);

        console.log("API response:", data);

        return data ?? null;
    } catch (error) {
        console.error("API error:", error?.response || error);
        throw error;
    }
}

 

