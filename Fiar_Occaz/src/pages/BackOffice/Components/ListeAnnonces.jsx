import { Component } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import test from "../../assets/src/images/layout/v1.jpg";
import { Link } from "react-router-dom";
import AnnonceService from "../services/AnnonceService";
import { useEffect } from "react";
class ListeAnnonce extends Component{
    constructor(props){
        super(props);
        this.state = {
            liste_marque :[],
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
        AnnonceService.getAllAnnonce(token,id).then((res)=> {
            this.setState({liste_marque:res.data});
        });
    }
    render(){
        return (
            <>
            <Header/>
            <this.FetchDataComponent />
            <div className="main-container" style={{marginTop:-150}}>
            {
                        this.state.liste_marque.map (
                            modele=>
                            <div className="row" style={{float:"left",width:500,marginLeft:20,marginRight:20,marginTop:20}}>
                                <div >
                                    <div className="card-box pd-30 pt-10 height-100-p">
            
                                        <div className="col-md-7" style={{marginLeft:70}}>
                                                <img src={test} alt="" />
                                        </div>
                                        <div className="col-md-10" style={{marginLeft:30}}>
                                            <p>{modele.description}</p>
                                        </div>
                                        <div className="col-md-10" style={{marginLeft:30}}>
                                            <p style={{fontWeight:"bolder"}}>Prix : {modele.voiture.prix} </p>
                                        </div>
                                        <div className="pull-right" style={{marginTop:-20 , paddingLeft:20}}>
                                            <Link to={`view_annonce/${modele.idannonce}`}  className="btn btn-primary btn-sm scroll-click" rel="content-y"  data-toggle="collapse" role="button" ><i className="fa fa-eye"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                }
            </div>
            <Footer/>
            </>
        );
    }
    
};
export default ListeAnnonce ;