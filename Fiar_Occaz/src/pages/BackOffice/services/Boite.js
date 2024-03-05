import axios from 'axios';
const base_url = "https://fiarapartie2-production-2baf.up.railway.app/bv";

class Boite {
    createBoite(token,id,boite){
        return axios.post(base_url+'/'+token+'/add/'+id,boite);
    }
    getAllBoite(token,id){
        return axios.get(base_url+'/'+token+'/getall/'+id);
    }
    UpdateBoite(token,id , idBoite , boite){
        return axios.put(base_url+'/'+token+'/update/'+id+'/'+idBoite,boite);
    }
    getOneBoite(token,id,idBoite){
        return axios.get(base_url+'/'+token+'/getone/'+id+'/'+idBoite);
    }
}
export default new Boite();