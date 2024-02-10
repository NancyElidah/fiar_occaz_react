import axios from 'axios';
const base_url = "https://fiarapartie2-production.up.railway.app/commission";

class ComService {
    createCommission(token , id , commission){
        return axios.post(base_url+'/'+token+'/add/'+id,commission);
    }
    getAllCommission(token , id ){
        return axios.get('https://fiarapartie2-production.up.railway.app/v_commission'+'/'+token+'/getall/'+id);
    }
    UpdateCommission(token,id , idCommission , Commission){
        return axios.put(base_url+'/'+token+'/update/'+id+'/'+idCommission,Commission);
    }
    getOneCommission(token,id,idCommission){
        return axios.get(base_url+'/'+token+'/getone/'+id+'/'+idCommission);
    }
}
export default new ComService();