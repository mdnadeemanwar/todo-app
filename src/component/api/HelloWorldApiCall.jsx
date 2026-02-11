
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

export  async function basicApiCallForHelloWorld(username) {
    try {
        const { data } = await apiClient.get(`/hello-world/path-variable/${username}`,{
            headers: {
                Authorization: `Bearer token-value`, // Replace with actual token if needed
            },
        });

        console.log("API response:", data);

        return data ?? null;
    } catch (error) {
        console.error("API error:", error?.response || error);
        throw error;
    }
}

export async function basicApiCallForHelloWorldWithToken(username, token) {
    try {
        const { data } = await apiClient.get(`/basicauth`, {
            headers: {
                Authorization: token,   // ✅ FIXED
            },
        });

        return data ?? null;
    } catch (error) {
        console.error("API error:", error?.response || error);
        throw error;
    }
}

