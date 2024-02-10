import image_login from "../../assets/vendors/images/imageshop.png"
import personne from "../../assets/vendors/images/briefcase.svg"
import { Component } from "react";
import withNavigateHook from "../Navigation/WithNavigateHook";
import UserService from "../services/UserService";
import { Link } from "react-router-dom";
class ContentLogin extends Component{
	constructor(props){
		super(props);
		this.state = {
			email:'elodie@gmail.com',
			motDePasse:'elodie1',
			info:{}
		}
		this.login = this.login.bind(this);
		this.handleEmail = this.handleEmail.bind(this);
		this.handleMotDePasse = this.handleMotDePasse.bind(this);
	}
	login(e){
		e.preventDefault();
		var email = this.state.email;
		var motDePasse = this.state.motDePasse;

		console.log(email , motDePasse)
		UserService.loginUser(email,motDePasse).then(res => {
			this.setState({info:res.data});
			if(res.data.token==null){
				alert("Vous n'êtes pas inscrit sur notre site");
			}else{
				if(res.data.token=='invalid'){
					alert('connexion invalid');
				}else{
					if(res.data.status == 10){
						console.log(res.data.user);
						sessionStorage.setItem("utilisateur",res.data.user);
						sessionStorage.setItem("token",res.data.token);
						sessionStorage.setItem("user",res.data.name);
						this.props.navigation(`${sessionStorage.getItem("token")}/accueil`);
					}else{
						alert("Erreur");
					}
				}
			}
		});
	}
	handleEmail= (e) => {
        var value = e.target.value;
		console.log(value +"e")
        this.setState({
            email :value
        })
    }

	handleMotDePasse= (e) => {
        var value = e.target.value;
        this.setState({
            motDePasse :value
        })
    }
	// handle
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
								<h2 className="text-center text-primary">Connection sur Fiar'Occaz</h2>
							</div>
							<form>
								<div className="select-role">
									<div className="btn-group btn-group-toggle" data-toggle="buttons">
										<label className="btn">
											<input type="radio" name="options" id="admin" />
												<div className="icon"><img src={personne} className="svg" alt="" /></div>
												<span>Je suis</span>
												l'admin
										</label>
										<label className="btn">
											<input type="radio" name="options" id="user" />
											<div className="icon"><img src={personne} className="svg" alt="" /></div>
											<span>Je suis </span>
											un Client
										</label>
									</div>
								</div>
								<div className="input-group custom">
									<input type="email" className="form-control form-control-lg" placeholder="Votre email" value={this.state.email}  onChange={event => this.handleEmail(event)} />
									<div className="input-group-append custom">
										<span className="input-group-text"><i className="icon-copy dw dw-user1"></i></span>
									</div>
								</div>
								<div className="input-group custom">
									<input type="password" className="form-control form-control-lg" placeholder="**********" value={this.state.motDePasse} onChange={event => this.handleMotDePasse(event)}/>
									<div className="input-group-append custom">
										<span className="input-group-text"><i className="dw dw-padlock1"></i></span>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-12">
										<div className="input-group mb-0">
											
											<button className="btn btn-primary btn-lg btn-block" onClick={this.login}> Se Connecter</button>
										</div>
										<div className="font-16 weight-600 pt-10 pb-10 text-center" data-color="#707373">OU</div>
										<div className="input-group mb-0">
											<Link to="/inscription" className="btn btn-outline-primary btn-lg btn-block">S'inscrire</Link>
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
export default withNavigateHook(ContentLogin);