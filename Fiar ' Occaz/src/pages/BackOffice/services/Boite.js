import axios from 'axios';
const base_url = "http://localhost:8080/bv";

class Boite {
    createBoite(boite){
        return axios.post(base_url,boite);
    }
    getAllBoite(){
        return axios.get(base_url);
    }
}
export default new Boite();