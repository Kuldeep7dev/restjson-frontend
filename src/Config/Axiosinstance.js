import axios from "axios";


// const URL = "http://localhost:4050"

const URL = "https://restjson.onrender.com"


// hi

const axiosInstance = axios.create({
    baseURL: URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});

// Optional: attach auth token to every request automatically
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Optional: global response error handling
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Token expired / not authenticated — you can redirect to login here if needed
            // window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
