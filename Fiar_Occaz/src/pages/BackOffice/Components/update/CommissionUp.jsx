import { Component } from "react";
import Footer from "../../../Footer";
import Header from "../../../Header";
import Boite from "../../services/Boite";
import withRouter from "../../Navigation/WithRouter";
import { useEffect } from "react";
import withNavigateHook from "../../Navigation/WithNavigateHook";

class CommissionUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            idboite: this.props.params.idboite,
            taux: ''

        }
        this.addBoite = this.addBoite.bind(this);
        this.handletaux = this.handletaux.bind(this);
    }
    componentDidMount() {
        // console.log(this.props.params.idboite + "idboite");
        // console.log("itooooooooooo : "+this.state.taux)
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
        Boite.getOneBoite(token, user, this.state.idboite).then((res) => {
            this.setState({ taux: res.data.commission });
        });
    }

    addBoite = (e) => {
        e.preventDefault();
        let boite = {
            idboite: null,
            taux: this.state.taux
        }
        let token = sessionStorage.getItem("token");
        // console.log(token);
        let user = sessionStorage.getItem("utilisateur");
        // console.log(user);
        // console.log(boite);
        Boite.UpdateBoite(token, user, this.state.idboite, boite).then(() => {
            this.setState({
                message: 'insertion reussie'
            })
        });
        // console.log(JSON.stringify(boite))
        this.props.navigation(`/:${sessionStorage.getItem("token")}/gestion_boite`);   
    }

    handletaux = (e) => {
        var value = e.target.value;
        this.setState({
            taux: value
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
                                        <h4 className="text-blue h4" style={{ color: "blue" }}>Ajout boîte de vitesse</h4>
                                        <p className="mb-20" style={{ fontSize: 10 }}>Ajouter un exemple de boîte de vitesse</p>
                                    </div>
                                </div>
                                <form>
                                    <div className="form-group row" style={{ marginLeft: 50 }}>
                                        <label className="col-sm-12 col-md-2 col-form-label" >taux de la boîte de vitesse</label>
                                        <div className="col-sm-12 col-md-8">
                                            <input className="form-control" type="text" placeholder="Boîte de vitesse ....." value={this.state.taux} onChange={event => this.handletaux(event)}/>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-12">
                                        <button className="btn btn-primary" onClick={this.addBoite} style={{ width: 250, marginLeft: 410 }}>Valider</button>
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
export default withNavigateHook(withRouter(CommissionUp));