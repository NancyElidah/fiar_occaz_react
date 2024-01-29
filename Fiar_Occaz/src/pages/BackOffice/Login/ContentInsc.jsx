import image_login from "../../assets/vendors/images/imageshop.png"
import personne from "../../assets/vendors/images/briefcase.svg"
import { Component } from "react";
import withNavigateHook from "../Navigation/WithNavigateHook";
import UserService from "../services/UserService";
import { Link } from "react-router-dom";
class ContentInsc extends Component{
	constructor(props){
		super(props);
		this.state = {
            nom:'',
			email:'',
			motDePasse:'',
            etat : ''
		}
		this.handleEmail = this.handleEmail.bind(this);
		this.handleMotDePasse = this.handleMotDePasse.bind(this);
        this.handleNom = this.handleNom.bind(this);
        this.handleEtat = this.handleEtat.bind(this);
		this.inscription = this.inscription.bind(this);
	}
	handleEmail= (e) => {
        var value = e.target.value;
        this.setState({
            email :value
        })
    }

    handleNom= (e) => {
        var value = e.target.value;
        this.setState({
            nom :value
        })
    }

	handleMotDePasse= (e) => {
        var value = e.target.value;
        this.setState({
            motDePasse :value
        })
    }

    handleEtat= (e) => {
        var value = e.target.value;
        this.setState({
            etat :value
        })
    }
    inscription (e){
        e.preventDefault();
        let user = {
            nom : this.state.nom , 
            email : this.state.email,
            password : this.state.motDePasse , 
            etat : this.state.etat
        }
        UserService.signUp(user).then((res) => {
            alert("Vous êtes maintenant inscrit sur Fiar'Occaz");
            this.props.navigation('/');
        });
    }
	render(){
		return (
			<>
				<div className="login-wrap d-flex align-items-center flex-wrap justify-content-center">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-6 col-lg-7">
						<img src={image_login} alt="" />
					</div>
					<div className="col-md-6 col-lg-5">
						<div className="login-box bg-white box-shadow border-radius-10">
							<div className="login-title">
								<h2 className="text-center text-primary">Inscription sur Fiar'Occaz</h2>
							</div>
							<form>
								<div className="select-role">
									<div className="btn-group btn-group-toggle" data-toggle="buttons">
										<label className="btn">
											<input type="radio" name="options" id="admin" value={10} onChange={event =>this.handleEtat(event)} />
												<div className="icon"><img src={personne} className="svg" alt="" /></div>
												<span>Je suis</span>
												l'admin
										</label>
										<label className="btn">
											<input type="radio" name="options" id="user" value={5} onChange={event =>this.handleEtat(event)} />
											<div className="icon"><img src={personne} className="svg" alt="" /></div>
											<span>Je suis </span>
											un Client
										</label>
									</div>
								</div>
                                <div className="input-group custom">
									<input type="text" className="form-control form-control-lg" placeholder="Votre Nom" onChange={this.handleNom} />
									<div className="input-group-append custom">
										<span className="input-group-text"><i className="icon-copy dw dw-user1"></i></span>
									</div>
								</div>
								<div className="input-group custom">
									<input type="email" className="form-control form-control-lg" placeholder="Votre email" onChange={this.handleEmail} />
									<div className="input-group-append custom">
										<span className="input-group-text"><i className="icon-copy dw dw-user1"></i></span>
									</div>
								</div>
								<div className="input-group custom">
									<input type="password" className="form-control form-control-lg" placeholder="**********"  onChange={this.handleMotDePasse}/>
									<div className="input-group-append custom">
										<span className="input-group-text"><i className="dw dw-padlock1"></i></span>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-12">
										<div className="input-group mb-0">
											
											<button className="btn btn-primary btn-lg btn-block" onClick={this.inscription}>S'inscrire</button>
										</div>
										<div className="font-16 weight-600 pt-10 pb-10 text-center" data-color="#707373">OU</div>
										<div className="input-group mb-0">
											<Link to="/" className="btn btn-outline-primary btn-lg btn-block" >Annuler</Link>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	
			</>
		)
	}
}
export default withNavigateHook(ContentInsc);