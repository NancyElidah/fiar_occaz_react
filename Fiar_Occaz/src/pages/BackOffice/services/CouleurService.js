import axios from 'axios';
const base_url = "https://fiaroccazback-production.up.railway.app/api/couleurs";

class CouleurService {
    createCouleur(token,id,Couleur){
        return axios.post(base_url+'/'+token+'/create/'+id,Couleur);
    }
    getAllCouleur(token , id){
        return axios.get(base_url+'/'+token+'/getAll/'+id);
    }
    UpdateCouleur(token,id , idBoite , boite){
        return axios.put(base_url+'/'+token+'/update/'+idBoite+'/'+id,boite);
    }
    getOneCouleur(token,id,idBoite){
        return axios.get(base_url+'/'+token+'/getById/'+idBoite+'/'+id);
    }
}
export default new CouleurService();