import { Component } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import MarqueService from "../services/MarqueService";
import withNavigateHook from "../Navigation/WithNavigateHook";
class Marque extends Component{
    constructor(props){
        super(props);
        this.state = {
            idmarque:'',
            nom:''
        }
        this.addMarque = this.addMarque.bind(this);
        this.handleNom = this.handleNom.bind(this);
    }
    addMarque = (e) => {
        e.preventDefault();
        let marque = {
            idmarque:null,
            nom : this.state.nom
        }
        let token = sessionStorage.getItem("token");
        let id = sessionStorage.getItem("utilisateur");
        console.log(marque);
        console.log(token);
        console.log(id);
        MarqueService.createMarque(token,id,marque).then(() => {
            this.setState({
                message:'insertion reussie'
            })
        });
        this.props.navigation(`/:${sessionStorage.getItem("token")}/gestion_marque`);         
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
                                        <h4 className="text-blue h4" style={{color:"blue"}}>Ajout Marque</h4>
                                        <p className="mb-20" style={{fontSize:10}}>Ajouter une marque de voiture</p>
                                    </div>
                                </div>
                        <form>
                            <div className="form-group row" style={{marginLeft:50}}>
                                <label className="col-sm-12 col-md-2 col-form-label" >Intitule </label>
                                <div className="col-sm-12 col-md-8">
                                    <input className="form-control" type="text" placeholder="Marque ....." onChange={this.handleNom}/>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12">
                                <button className="btn btn-primary" onClick={this.addMarque} style={{width:250 , marginLeft:410}}>Valider</button>
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
export default withNavigateHook(Marque);
