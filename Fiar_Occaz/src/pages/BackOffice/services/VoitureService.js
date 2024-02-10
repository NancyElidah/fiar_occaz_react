import axios from 'axios';
const base_url = "https://fiarapartie2-production.up.railway.app/api/voitures";

class VoitureService {
    getAllVoiture(token,id){
        return axios.get(base_url+'/'+token+'/getAll/'+id);
    }
}
export default new VoitureService();