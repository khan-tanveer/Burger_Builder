import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-cda5d.firebaseio.com/' 
}); 


export default instance;