import axios from 'axios';
const base_url = "https://fiaroccazback-production.up.railway.app/login";

class UserService {
    loginUser(email, motDePasse){
        return axios.post(base_url, { email: email, password: motDePasse }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    
}
export default new UserService();