import { Component } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import EnergieService from "../services/EnergieService";
import WithNavigateHook  from "../Navigation/WithNavigateHook";

class Energie extends Component {
    constructor(props){
        super(props);
        this.state = {
            idenergie:'',
            energie:''
        }
        this.addEnergie = this.addEnergie.bind(this);
        this.handleenergie = this.handleenergie.bind(this);
    }
    addEnergie = (e) => {
        e.preventDefault();
        // console.log("teste");
        let energie = {
            idenergie:null,
            energie : this.state.energie
        }
        console.log(energie);
        let token = sessionStorage.getItem("token");
        let id = sessionStorage.getItem("utilisateur");
        EnergieService.createEnergie(token,id,energie).then(() => {
            this.setState({
                message:'insertion reussie'
            })
        });
        this.props.navigation(`/:${sessionStorage.getItem("token")}/gestion_energie`);   
        // alert("insertion réussie");
        
    }
    handleenergie = (e) => {
        var value = e.target.value;
        this.setState({
            energie :value
        })
    }
    render(){
        return (
            <>
                <Header />
                <div className="main-container" style={{marginTop:-150}}>
                    <div className="pd-ltr-20 xs-pd-20-10">
                        <div className="min-height-200px">
                            <div className="page-header">
                                <div className="clearfix">
                                    <div className="pull-left">
                                        <h4 className="text-blue h4" style={{color:"blue"}}>Ajout Energie</h4>
                                        <p className="mb-20" style={{fontSize:10}}>Ajouter type de carburant</p>
                                    </div>
                                </div>
                        <form>
                            <div className="form-group row" style={{marginLeft:50}}>
                                <label className="col-sm-12 col-md-2 col-form-label" >Intitule de l'Energie</label>
                                <div className="col-sm-12 col-md-8">
                                    <input className="form-control" type="text" placeholder="Energie ....." onChange={this.handleenergie}/>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12">
                                <button className="btn btn-primary" onClick={this.addEnergie} style={{width:250 , marginLeft:410}}>Valider</button>
                            </div>
                            
                        </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
            </>
        );
    }
}
export default WithNavigateHook(Energie);