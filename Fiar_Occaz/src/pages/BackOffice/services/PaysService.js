import axios from 'axios';
const base_url = "https://fiaroccazback-production.up.railway.app/api/pays";

class Pays {
    createPays(token, id ,Pays){
        return axios.post(base_url+'/'+token+'/create/'+id,Pays);
    }
    getAllPays(token,id){
        return axios.get(base_url+'/'+token+'/getAll/'+id);
    }
    UpdatePays(token,id , idBoite , boite){
        return axios.put(base_url+'/'+token+'/update/'+idBoite+'/'+id,boite);
    }   
    getOnePays(token,id,idBoite){
        return axios.get(base_url+'/'+token+'/getById/'+idBoite +'/'+ id);
    }
}
export default new Pays();