import axios from 'axios';
const base_url = "https://fiaroccazback-production.up.railway.app/api/annonces";

class AnnonceService {
    getAllAnnonce(token,id){
        return axios.get(base_url+'/'+token+'/getAll/'+id);
    }
    getOneAnnonce(token,id, idA){
        return axios.get(base_url+'/'+token+'/getOne/'+id+'/'+idA);
    }
    validAnnonce(token,id, idA){
        return axios.post(base_url+'/'+token+'/valider/'+idA+'/'+id);
    }
}
export default new AnnonceService();