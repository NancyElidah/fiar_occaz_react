import axios from 'axios';
const base_url = "https://fiarapartie2-production-2baf.up.railway.app/login";

class UserService {
    loginUser(email, motDePasse){
        return axios.post(base_url, { email: email, password: motDePasse }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    signUp (user){
        return axios.post("https://fiarapartie2-production-2baf.up.railway.app/sign_up",user);
    }
    
}
export default new UserService();