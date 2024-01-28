import axios from 'axios';
const base_url = "https://fiaroccazback-production.up.railway.app/modele";

class Modele {
    createModel(token, id ,modele){
        return axios.post(base_url+'/'+token+'/add/'+id,modele);
    }
    getAllModele(token,id){
        return axios.get(base_url+'/'+token+'/getall/'+id);
    }
    UpdateModele(token,id , idBoite , boite){
        return axios.put(base_url+'/'+token+'/update/'+idBoite+'/'+id,boite);
    }
    getOneModele(token,id,idBoite){
        return axios.get(base_url+'/'+token+'/getone/'+id+'/'+ idBoite);
    }
}
export default new Modele();