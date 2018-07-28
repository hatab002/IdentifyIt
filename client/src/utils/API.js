import axios from "axios";

export default {
    // Users API
    getUsers: () => axios.get("/api/users"),
    saveUser: (userData) => axios.post("/api/users", userData),
    getUser: (userId) => axios.get(`/api/users/${userId}`),
    getUserByEmail: (userEmail) => axios.get(`/api/users/email/${userEmail}`),
    updateUser: (userId, userData) => axios.put(`/api/users/${userId}`, userData),
    deleteUser: (userId) => axios.delete(`/api/users/${userId}`),

    // Pictures API
    getPictures: () => axios.get("/api/pictures"),
    savePicture: (picData) => axios.post("/api/pictures", picData),
    getPicture: (picId) => axios.get(`/api/pictures/${picId}`),
    updatePicture: (picId, picData) => axios.put(`/api/pictures/${picId}`, picData),
    deletePicture: (picId) => axios.delete(`/api/pictures/${picId}`),

    // Comments API
    getComments: () => axios.get("/api/comments"),
    saveComment: (commentData) => axios.post("/api/comments", commentData),
    getComment: (commentId) => axios.get(`/api/comments/${commentId}`),
    updateComment: (commentId, commentData) => axios.put(`/api/comments/${commentId}`, commentData),
    deleteComment: (commentId) => axios.delete(`/api/comments/${commentId}`),
};
