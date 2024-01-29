import { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import TypeService from "../services/TypeService";
import withNavigateHook from "../Navigation/WithNavigateHook";
class SelectType extends Component{
    constructor (props){
        super(props);
        this.state = {
            type:[],
            idType:'',
            annee :''
        }
        this.handleIdType = this.handleIdType.bind(this);
        this.handleAnnee = this.handleAnnee.bind(this);
        this.select = this.select.bind(this);
    }
    componentDidMount() {
        let token = sessionStorage.getItem("token");
        let utilisateur = sessionStorage.getItem("utilisateur");
        TypeService.getAllType(token,utilisateur).then((res)=> {
            this.setState({type:res.data});
        });   
    }
    handleIdType = (e) => {
        var value = e.target.value;
        this.setState({
          idType: value
        });
    }
    handleAnnee = (e) => {
        var value = e.target.value;
        this.setState({
          annee: value
        });
    }

    select =(e)=>{
        e.preventDefault();
        let token = sessionStorage.getItem("token");
        this.props.navigation(`/:${token}/stat_chiffre/${this.state.idType}/${this.state.annee}}`);
    }

    render(){
        return(
            <>
            <Header />
            <div className="main-container" style={{marginTop:-150}}>
                <div className="pd-ltr-20 xs-pd-20-10">
                    <div className="min-height-200px">
                        <div className="page-header">
					        <div className="clearfix">
						        <div className="pull-left">
                                    <h4 className="text-blue h4" style={{color:"blue"}}>Choisir une type </h4>
                                    <p className="mb-20" style={{fontSize:10}}>Choisir une type de voiture pour voir le chiffre d'affaire</p>
						        </div>
                            </div>
                    <form>
                    <div class="form-group row" style={{marginLeft:50}}>
							<label class="col-sm-12 col-md-2 col-form-label">Type</label>
							<div class="col-sm-12 col-md-8">
								<select class="custom-select col-12" value={this.state.idType} onChange={this.handleIdType}>
									<option selected="">Choisir...</option>
									{
                                    this.state.type.map(
                                      carte => <option value={carte.idType} key={carte.idType} >{carte.nom}</option>
                                    )}
								</select>
							</div>
						</div>
                        <div className="form-group row" style={{marginLeft:50}}>
							<label className="col-sm-12 col-md-2 col-form-label" >Année</label>
							<div className="col-sm-12 col-md-8">
								<input className="form-control" type="text" placeholder="Année ....." onChange={this.handleAnnee}/>
							</div>
                        </div>
                        
                        <div className="col-sm-12 col-md-12">
							<button className="btn btn-primary" style={{width:250 , marginLeft:410}} onClick={this.select}>Voir</button>
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
export default withNavigateHook(SelectType) ; 