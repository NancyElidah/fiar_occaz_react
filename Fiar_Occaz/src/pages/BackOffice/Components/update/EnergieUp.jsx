import { Component } from "react";
import Footer from "../../../Footer";
import Header from "../../../Header";
import withRouter from "../../Navigation/WithRouter";
import { useEffect } from "react";
import withNavigateHook from "../../Navigation/WithNavigateHook";
import CouleurService from "../../services/CouleurService";

class EnergieUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            idboite: this.props.params.idboite,
            energie: ''

        }
        this.addCouleur = this.addCouleur.bind(this);
        this.handleenergie = this.handleenergie.bind(this);
    }
    componentDidMount() {
        // console.log(this.props.params.idboite + "idboite");
        // console.log("itooooooooooo : "+this.state.energie)
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
        // console.log(token);
        let user = sessionStorage.getItem("utilisateur");
        // console.log(user);
        // console.log(this.state.idboite);
        CouleurService.getOneCouleur(token, user, this.state.idboite).then((res) => {
            this.setState({ energie: res.data.energie });
        });
    }

    addCouleur = (e) => {
        e.preventDefault();
        let boite = {
            idboite: null,
            energie: this.state.energie
        }
        let token = sessionStorage.getItem("token");
        // console.log(token);
        let user = sessionStorage.getItem("utilisateur");
        // console.log(user);
        // console.log(boite);
        CouleurService.UpdateCouleur(token, user, this.state.idboite, boite).then(() => {
            this.setState({
                message: 'insertion reussie'
            })
        });
        // console.log(JSON.stringify(boite))
        this.props.navigation(`/:${sessionStorage.getItem("token")}/gestion_couleur`);   
    }

    handleenergie = (e) => {
        var value = e.target.value;
        this.setState({
            energie: value
        })
    }
    render() {
        return (
            <>
                <Header />
                <div className="main-container" style={{ marginTop: -150 }}>
                    <div className="pd-ltr-20 xs-pd-20-10">
                        <div className="min-height-200px">
                            <div className="page-header">
                                <div className="clearfix">
                                    <div className="pull-left">
                                        <h4 className="text-blue h4" style={{ color: "blue" }}>Modification</h4>
                                        <p className="mb-20" style={{ fontSize: 10 }}>Modifier une  couleur</p>
                                    </div>
                                </div>
                                <form>
                                    <div className="form-group row" style={{ marginLeft: 50 }}>
                                        <label className="col-sm-12 col-md-2 col-form-label" >energie de la couleur</label>
                                        <div className="col-sm-12 col-md-8">
                                            <input className="form-control" type="text" placeholder="Boîte de vitesse ....." value={this.state.energie} onChange={event => this.handleenergie(event)}/>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-12">
                                        <button className="btn btn-primary" onClick={this.addCouleur} style={{ width: 250, marginLeft: 410 }}>Valider</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}
export default withNavigateHook(withRouter(EnergieUp));