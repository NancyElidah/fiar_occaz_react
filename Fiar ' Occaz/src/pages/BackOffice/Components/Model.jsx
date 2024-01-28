import { Component } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import Modele from "../services/Modele";
import WithNavigateHook  from "../Navigation/WithNavigateHook";

class Model extends Component {
    constructor(props){
        super(props);
        this.state = {
            idmodele:'',
            nom:''
        }
        this.addModel = this.addModel.bind(this);
        this.handleNom = this.handleNom.bind(this);
    }
    addModel = (e) => {
        e.preventDefault();
        // console.log("teste");
        let boite = {
            idmodele:null,
            nom : this.state.nom
        }
        let token = sessionStorage.getItem("token");
        let id = sessionStorage.getItem("utilisateur");
        console.log(boite);
        Modele.createModel(token,id,boite).then(() => {
            this.setState({
                message:'insertion reussie'
            })
        });
        this.props.navigation(`/:${sessionStorage.getItem("token")}/gestion_modele`);        // alert("insertion réussie");
        
    }
    handleNom = (e) => {
        var value = e.target.value;
        this.setState({
            nom :value
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
                                        <h4 className="text-blue h4" style={{color:"blue"}}>Ajout Model</h4>
                                        <p className="mb-20" style={{fontSize:10}}>Ajouter une modèle de voiture</p>
                                    </div>
                                </div>
                        <form>
                            <div className="form-group row" style={{marginLeft:50}}>
                                <label className="col-sm-12 col-md-2 col-form-label" >Intitule de la model</label>
                                <div className="col-sm-12 col-md-8">
                                    <input className="form-control" type="text" placeholder="Model ....." onChange={this.handleNom}/>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12">
                                <button className="btn btn-primary" onClick={this.addModel} style={{width:250 , marginLeft:410}}>Valider</button>
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
export default WithNavigateHook(Model);