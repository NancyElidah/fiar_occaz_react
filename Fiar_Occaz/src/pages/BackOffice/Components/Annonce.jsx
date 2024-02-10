import { Component } from "react";
import Header from "../../Header";
import sary from '../../assets/src/images/layout/v1.jpg'
import { Link } from "react-router-dom";
import Footer from "../../Footer";
import withRouter from "../Navigation/WithRouter";
import { useEffect } from "react";
import AnnonceService from "../services/AnnonceService";
import withNavigateHook from "../Navigation/WithNavigateHook";
class Annonce extends Component{
    constructor(props){
        super(props);
        this.state = {
            message: '',
            id: this.props.params.idannonce,
            description : '',
            prix :'',
            type :'',
            modele:'',
            marque:'',
            boite:'',
            energie:'',
            couleur:'',
            nombre_place :'',
            nombre_porte:''
        }
        this.valid = this.valid.bind(this);
    }
    componentDidMount() {
        this.fetchData();
    }

    FetchDataComponent = () => {
        useEffect(() => {
            this.fetchData();
        }, [this.state]);
        return null;
    }
    fetchData = () => {
        let token = sessionStorage.getItem("token");
        let user = sessionStorage.getItem("utilisateur");

        AnnonceService.getOneAnnonce(token, user, this.state.id).then((res) => {
            this.setState({ 
                description : res.data.description ,
                prix:res.data.voiture.prix,
                type:res.data.voiture.type.nom,
                modele:res.data.voiture.modele.nom,
                marque:res.data.voiture.marque.nom,
                boite:res.data.voiture.boiteVitesse.nom,
                energie: res.data.voiture.energie.energie,
                couleur:res.data.voiture.couleur.nom,
                nombre_place:res.data.voiture.nbPlace,
                nombre_porte:res.data.voiture.nbPorte
            });
        });
    }
    valid = (e) => {
        e.preventDefault();
        // console.log("teste");
        let energie = {
            idenergie:null,
            energie : this.state.energie
        }
        console.log(energie);
        let token = sessionStorage.getItem("token");
        let id = sessionStorage.getItem("utilisateur");
        AnnonceService.validAnnonce(token,id,this.state.id).then(() => {
            this.setState({
                message:'insertion reussie'
            })
        });
        this.props.navigation(`/:${sessionStorage.getItem("token")}/liste_annonce`);   
        // alert("insertion réussie");
        
    }
    render(){
        return (
            <>
            <Header></Header>
                <div class="main-container">
    <div class="pd-ltr-20">
        <div class="card-box pd-20 height-100-p mb-30" style={{marginTop:-150}}>
            <div class="row align-items-center">
                <div class="col-md-4">
                    <img src={sary} alt="" />
                </div>
                
                <div class="col-md-8">
                <div className="pull-right">
                    <Link to={`${sessionStorage.getItem("token")}/liste_annonce`} className="btn btn-primary btn-sm scroll-click" rel="content-y"  data-toggle="collapse" role="button" ><i className="fa fa-remove"></i></Link>
                </div>
                    <p class="font-18 max-width-600">{this.state.description}.</p>
                    
                    <table className="table" style={{border:"less"}}>
                            <thead>
                            </thead>
                            <tbody>
                                        <td>Prix</td>
                                        <td>{this.state.prix}</td>
                                        <tr></tr>
                                        <td>Type</td>
                                        <td>{this.state.type}</td>
                                        <tr></tr>

                                        <td>Modele</td>
                                        <td>{this.state.modele}</td>
                                        <tr></tr>

                                        <td>Marque</td>
                                        <td>{this.state.marque}</td>

                                        <tr></tr>

                                        <td>Boite de vitesse</td>
                                        <td>{this.state.boite}</td>


                                        <tr></tr>

                                        <td>Energie</td>
                                        <td>{this.state.energie}</td>

                                        <tr></tr>

                                        <td>Couleur</td>
                                        <td>{this.state.couleur}</td>

                                        <tr></tr>

                                        <td>Nombre de place</td>
                                        <td>{this.state.nombre_place}</td>

                                        <tr></tr>

                                        <td>Nombre de porte</td>
                                        <td>{this.state.nombre_porte}</td>
                            </tbody>
                        </table>
                </div>
                
                <div className="col-sm-12 col-md-12">
                    <button className="btn btn-primary" onClick = {this.valid} style={{width:250 , marginLeft:820}}>Valider</button>
                </div>
            </div>
        </div>
        </div></div>
        <Footer></Footer>
            </>
        );
    }
    
}
export default withNavigateHook(withRouter(Annonce));