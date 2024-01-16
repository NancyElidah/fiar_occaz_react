import axios from 'axios';
const base_url = "http://localhost:8080/modele";

class Modele {
    createBoite(modele){
        return axios.post(base_url,modele);
    }
    getAllBoite(){
        return axios.get(base_url);
    }
}
export default new Modele();