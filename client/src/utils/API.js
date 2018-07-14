import axios from "axios";

export default {
    getUsers: () => axios.get("/api/users/"),
    saveUser: (userData) => axios.post("/api/users", userData),
    getUser: (userId) => axios.get(`/api/users/${userId}`),
    updateUser: (userId, userData) => axios.put(`/api/users/${userId}`, userData),
    deleteUser: (userId) => axios.delete(`/api/users/${userId}`)
};
