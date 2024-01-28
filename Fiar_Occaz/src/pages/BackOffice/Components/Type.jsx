import { Component } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { Link } from "react-router-dom";
import TypeService from "../services/TypeService";
import withNavigateHook from "../Navigation/WithNavigateHook";

class Type extends Component {
    constructor(props){
        super(props);
        this.state = {
            idtype:'',
            nom:''
        }
        this.addType = this.addType.bind(this);
        this.handleNom = this.handleNom.bind(this);
    }
    addType = (e) => {
        e.preventDefault();
        // console.log("teste");
        let type = {
            idtype:null,
            nom : this.state.nom
        }
        let token = sessionStorage.getItem("token");
        let user = sessionStorage.getItem("utilisateur");
        console.log(type);
        TypeService.createType(token,user,type).then(() => {
            this.setState({
                message:'insertion reussie'
            })
        });
         this.props.navigation(`/:${sessionStorage.getItem("token")}/gestion_type`);
        // alert("insertion réussie");
        
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
                                        <h4 className="text-blue h4" style={{color:"blue"}}>Ajout ou modification Type</h4>
                                        <p className="mb-20" style={{fontSize:10}}>Type ou Categorie</p>
                                    </div>
                                    <div className="pull-right">
                                        <Link to="/Component" className="btn btn-primary btn-sm scroll-click" rel="content-y"  data-toggle="collapse" role="button">Voir gestion</Link>
                                    </div>
                                </div>
                        <form>
                            <div className="form-group row" style={{marginLeft:50}}>
                                <label className="col-sm-12 col-md-2 col-form-label" >Intitule du type</label>
                                <div className="col-sm-12 col-md-8">
                                    <input className="form-control" type="text" placeholder="Type ....." onChange={this.handleNom}/>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12">
                                <button className="btn btn-primary" onClick={this.addType} style={{width:250 , marginLeft:410}}>Valider</button>
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
export default withNavigateHook(Type);