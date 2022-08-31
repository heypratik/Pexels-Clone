import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.pexels.com/v1/"
})

export default instance;