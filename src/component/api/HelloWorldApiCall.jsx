
import axios from "axios";


const apiClient = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
    },
});


export default async function apiCallForHelloWorld() {
    try {
        const { data } = await apiClient.get(`/hello-world-bean`);

        console.log("API response:", data);

        return data ?? null;
    } catch (error) {
        console.error("API error:", error?.response || error);
        throw error;
    }
}   

export  async function apiCallForHelloWorldWithPathVariable(username) {
    try {
        const { data } = await apiClient.get(`/hello-world-bean/${username}`);

        console.log("API response:", data);

        return data ?? null;
    } catch (error) {
        console.error("API error:", error?.response || error);
        throw error;
    }
}

