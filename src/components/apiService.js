import axios from "axios";

// Replace with your actual Spring Boot backend URL
const BASE_URL = "http://localhost:8080"; 

export const createContact = async (formData) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/contacts`, formData, {
            withCredentials: true // Enable sending cookies/credentials (if needed)
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Request failed with status ${response.status}: ${errorMessage}`);
        }

        return response.data; 
    } catch (error) {
        console.error("Error creating contact:", error.message);

        if (error.response) {
            console.error("Response data:", error.response.data);
            console.error("Response status:", error.response.status);
        } else if (error.request) {
            console.error("Request:", error.request);
        } else {
            console.error("Error message:", error.message);
        }

        throw error; 
    }
};
