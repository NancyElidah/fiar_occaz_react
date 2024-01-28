import { Component } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import CouleurService from "../services/CouleurService";
import WithNavigateHook  from "../Navigation/WithNavigateHook";

class Couleur extends Component {
    constructor(props){
        super(props);
        this.state = {
            idCouleur:'',
            nom:''
        }
        this.addCouleur = this.addCouleur.bind(this);
        this.handleCouleur = this.handleCouleur.bind(this);
    }
    addCouleur = (e) => {
        e.preventDefault();
        // console.log("teste");
        let Couleur = {
            idCouleur:null,
            nom : this.state.nom
        }
        console.log(Couleur);
        let token = sessionStorage.getItem("token");
        let id = sessionStorage.getItem("utilisateur");
        CouleurService.createCouleur(token,id,Couleur).then(() => {
            this.setState({
                message:'insertion reussie'
            })
        });
        this.props.navigation(`/:${sessionStorage.getItem("token")}/gestion_Couleur`);   
        // alert("insertion réussie");
        
    }
    handleCouleur = (e) => {
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
                                        <h4 className="text-blue h4" style={{color:"blue"}}>Ajout Couleur</h4>
                                        <p className="mb-20" style={{fontSize:10}}>Ajouter une Couleur</p>
                                    </div>
                                </div>
                        <form>
                            <div className="form-group row" style={{marginLeft:50}}>
                                <label className="col-sm-12 col-md-2 col-form-label" >Couleur : </label>
                                <div className="col-sm-12 col-md-8">
                                    <input className="form-control" type="text" placeholder="Couleur ....." onChange={this.handleCouleur}/>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12">
                                <button className="btn btn-primary" onClick={this.addCouleur} style={{width:250 , marginLeft:410}}>Valider</button>
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
export default WithNavigateHook(Couleur);