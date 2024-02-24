import axios from 'axios';
const fechAllUser = () => {
    return axios.get("https://reqres.in/api/users?page=1")
}
export { fechAllUser };