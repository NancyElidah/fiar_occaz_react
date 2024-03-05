import axios from 'axios';
const base_url = "https://fiarapartie2-production-2baf.up.railway.app/api/energies";

class EnergieService {
    createEnergie(token,id,Energie){
        return axios.post(base_url+'/'+token+'/save/'+id,Energie);
    }
    getAllEnergie(token , id){
        return axios.get(base_url+'/'+token+'/getAll/'+id);
    }
    UpdateEnergie(token,id , idBoite , boite){
        return axios.put(base_url+'/'+token+'/update/'+idBoite+'/'+id,boite);
    }
    getOneEnergie(token,id,idBoite){
        return axios.get(base_url+'/'+token+'/getById/'+idBoite+'/'+id);
    }
}
export default new EnergieService();