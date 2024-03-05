import axios from 'axios';
const base_url = "https://fiarapartie2-production-2baf.up.railway.app/form";

class Type {
    createType(token,id,type){
        return axios.post(base_url+'/'+token+'/add/'+id,type);
    }
    getAllType(token,id){
        return axios.get(base_url+'/'+token+'/getall/'+id);
    }
    UpdateType(token,id , idBoite , boite){
        return axios.put(base_url+'/'+token+'/update/'+idBoite+'/'+id,boite);
    }
    getOneType(token,id,idBoite){
        return axios.get(base_url+'/'+token+'/getone/'+id+'/'+idBoite);
    }
}
export default new Type();