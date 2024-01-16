import { Component } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import Boite from "../services/Boite";

class BoiteVitesse extends Component{
    constructor(props){
        super(props);
        this.state = {
            message :'',

            idboite :'',
            nom :''

        }
        this.addBoite = this.addBoite.bind(this);
        this.handleNom = this.handleNom.bind(this);
    }
    addBoite = (e) => {
        e.preventDefault();
        // console.log("teste");
        let boite = {
            idboite:null,
            nom : this.state.nom
        }
        console.log(boite);
        Boite.createBoite(boite).then(() => {
            this.setState({
                message:'insertion reussie'
            })
        });
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
                                        <h4 className="text-blue h4" style={{color:"blue"}}>Ajout boîte de vitesse</h4>
                                        <p className="mb-20" style={{fontSize:10}}>Ajouter un exemple de boîte de vitesse</p>
                                    </div>
                                </div>
                        <form>
                            <div className="form-group row" style={{marginLeft:50}}>
                                <label className="col-sm-12 col-md-2 col-form-label" >nom de la boîte de vitesse</label>
                                <div className="col-sm-12 col-md-8">
                                    <input className="form-control" type="text" placeholder="Boîte de vitesse ....." value={this.state.nom} onChange={this.handleNom}/>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12">
                                <button className="btn btn-primary" onClick = {this.addBoite} style={{width:250 , marginLeft:410}}>Valider</button>
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
export default BoiteVitesse;