import axios from 'axios';
const base_url = "https://fiarapartie2-production.up.railway.app/api/marques";

class MarqueService {
    createMarque(token , id , marque){
        return axios.post(base_url+'/'+token+'/create/'+id,marque);
    }
    getAllMarque(token ,id){
        return axios.get(base_url+'/'+token+'/getAll/'+id);
    }
    UpdateMarque(token,id , idBoite , boite){
        return axios.put(base_url+'/'+token+'/update/'+idBoite+'/'+id,boite);
    }
    getOneMarque(token,id,idBoite){
        return axios.get(base_url+'/'+token+'/getById/'+idBoite+'/'+id);
    }
}
export default new MarqueService();