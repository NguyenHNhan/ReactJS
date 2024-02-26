import axios from './customize-axios';

const fechAllUser = (page) => {
    return axios.get(`/api/users?page=${page}`)
}

const postCrUser = (name, job) => {
    return axios.post("/api/users", { name, job})
}
export { fechAllUser, postCrUser };