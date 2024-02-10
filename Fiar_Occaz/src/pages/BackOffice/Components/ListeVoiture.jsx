import Header from "../../Header"
import { Component } from "react";
import { useEffect } from "react";
import VoitureService from "../services/VoitureService";
class ListeVoiture extends Component {
    constructor(props){
        super(props);
        this.state = {
            liste_type :[]
        }
    }
    componentDidMount(){
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
        let id = sessionStorage.getItem("utilisateur");
        console.log(token , id)
        VoitureService.getAllVoiture(token,id).then((res)=> {
            this.setState({liste_type:res.data});
        });
    }
    render() {
        return(
            <>
            <Header/>
            <this.FetchDataComponent />
            <div className="main-container" style={{marginTop:-150}}>
                    <div className="pd-ltr-20 xs-pd-20-10">
                        <div className="min-height-200px">
                            <div className="page-header">
                            <div className="pd-20 card-box mb-30">
                        <div className="clearfix mb-20">
                            <div className="pull-left">
                                <h4 className="text-blue h4" style={{color:"blue"}}>Liste des voiture</h4>
                                <p>Crud <code>.Type</code></p>
                            </div>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">ID</th>
                                    <th scope="col">Couleur</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Marque</th>
                                    <th scope="col">Modele</th>
                                    <th scope="col">Pays</th>
                                    <th scope="col">Vitesse</th>
                                    <th scope="col">Energie</th>
                                    <th scope="col">Kilometrage</th>
                                    <th scope="col">Prix</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.liste_type.map (
                                        modele=>
                                        <tr>
                                            <th scope="row">{modele.idVoiture}</th>
                                            <td>Voiture {modele.idVoiture}</td>
                                            <td>{modele.couleur.couleur}</td>
                                            <td>{modele.type.nom}</td>
                                            <td>{modele.marque.nom}</td>
                                            <td>{modele.modele.nom}</td>
                                            <td>{modele.Pays.nom}</td>
                                            <td>{modele.boiteVitesse.nom}</td>
                                            <td>{modele.energie.energie}</td>
                                            <td>{modele.kilometrage}</td>
                                            <td>{modele.prix}</td> 
                                        </tr>
                                    )
                                }
                                
                            </tbody>
                        </table>
                        <div className="collapse collapse-box" id="basic-table" >
                            <div className="code-box">
                                <div className="clearfix">
                                    <a href="javascript:;" className="btn btn-primary btn-sm code-copy pull-left"  data-clipboard-target="#basic-table-code"><i className="fa fa-clipboard"></i> Copy Code</a>
                                    <a href="#basic-table" className="btn btn-primary btn-sm pull-right" rel="content-y"  data-toggle="collapse" role="button"><i className="fa fa-eye-slash"></i> Hide Code</a>
                                </div>
                                <pre /><code className="xml copy-pre" id="basic-table-code"></code>
                            </div></div></div>
                            </div></div></div></div>
                               
            </>
        );
    }
}
export default ListeVoiture;