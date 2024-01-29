import axios from 'axios';
const base_url = "https://fiaroccazback-production.up.railway.app/";

class StatistiqueBord {
    getStatistique(token,id,etat,status){
        if(etat==":type"){
            return axios.get(base_url+'v_stat_type/'+token+'/getstat/'+id+'/'+status);        
        }else if (etat==":marque"){
            return axios.get(base_url+'v_stat_marque/'+token+'/getstat/'+id+'/'+status); 
        }else if (etat==":model"){
            return axios.get(base_url+'v_stat_modele/'+token+'/getstat/'+id+'/'+status); 
        }
    }
}
export default new StatistiqueBord();