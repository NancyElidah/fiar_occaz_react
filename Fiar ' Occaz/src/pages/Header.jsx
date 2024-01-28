import { Component } from "react";
import sary from "../pages/assets/src/images/fiara.png"
import { Link } from 'react-router-dom';
import withNavigateHook from "./BackOffice/Navigation/WithNavigateHook";
class Header extends Component {
	constructor(props){
		super(props);
		this.handleLogOut = this.handleLogOut.bind(this);
	}
	handleLogOut(){
		sessionStorage.removeItem("token");
		sessionStorage.removeItem("utilisateur");
		sessionStorage.removeItem("user");
		this.props.navigation('/');
	}
	render(){
		return (
			<>
			<div className="header">
				<div className="header-left">
				 <div className="menu-icon dw dw-menu"></div>
				 <div className="search-toggle-icon dw dw-search2" data-toggle="header_search"></div>
				 <div className="header-search">
					 <form>
						 <div className="form-group mb-0">
							 <i className="dw dw-search2 search-icon"></i>
							 <input type="text" className="form-control search-input" placeholder="Search Here"/>
							 <div className="dropdown">
								 <Link className="dropdown-toggle no-arrow" to="" role="button" data-toggle="dropdown">
									 <i className="ion-arrow-down-c"></i>
								 </Link>
							 </div>
						 </div>
					 </form>
				 </div>
					</div>
					<div className="header-right">
	  
				 <div className="user-notification">
					 <div className="dropdown">
						 <button onClick={this.handleLogOut} className="btn btn-primary btn-sm scroll-click" rel="content-y"  data-toggle="collapse" role="button"><i className="fa fa-sign-out"></i></button>
					 </div>
				 </div>
				 </div>
				</div>
	 
		 <div className="left-side-bar">
			 <div className="brand-logo">
				 <a href="index.html">
					 <img src={sary} alt="" className="light-logo"/>
				 </a>
				 <div className="close-sidebar" data-toggle="left-sidebar-close">
					 <i className="ion-close-round"></i>
				 </div>
			 </div>
			 <div className="menu-block customscroll">
				 <div className="sidebar-menu">
					 <ul id="accordion-menu">
					 <li className="dropdown">
					 <Link to={`/${sessionStorage.getItem("token")}/component`} className="dropdown-toggle">
						 <span className="micon dw dw-house-1"></span><span className="mtext">Gestion</span>
					 </Link>
						 </li>	
					 </ul>
				 </div>
				 <div className="sidebar-menu">
					 <ul id="accordion-menu">
					 <li className="dropdown">
					 <Link to={`/${sessionStorage.getItem("token")}/liste_annonce`} className="dropdown-toggle">
						 <span className="micon"><i className="fa fa-list"></i></span><span className="">Annonce</span>
					 </Link>
						 </li>	
					 </ul>
				 </div>
				 <div className="sidebar-menu">
					 <ul id="accordion-menu">
					 <li className="dropdown">
					 <Link to={`/${sessionStorage.getItem("token")}/accueil`} className="dropdown-toggle">
						 <span className="micon"><i className="icon-copy fa fa-bar-chart" aria-hidden="true"></i></span><span className="">Bord</span>
					 </Link>
						 </li>	
					 </ul>
				 </div>
				 <div className="sidebar-menu">
					 <ul id="accordion-menu">
					 <li className="dropdown">
					 <Link to={`/${sessionStorage.getItem("token")}/stat_chiffre`} className="dropdown-toggle">
						 <span className="micon"><i className="icon-copy fa fa-money" aria-hidden="true"></i></span><span className="">Chiffre d'affaire</span>
					 </Link>
						 </li>	
					 </ul>
				 </div>
				 <div className="sidebar-menu">
					 <ul id="accordion-menu">
					 <li className="dropdown">
					 <Link to={`/${sessionStorage.getItem("token")}/liste_commission`} className="dropdown-toggle">
						 <span className="micon"><i className="icon-copy fa fa-plus-square-o" aria-hidden="true"></i></span><span className="">Commission</span>
					 </Link>
						 </li>	
					 </ul>
				 </div>
			 </div>
		 </div>
		 <div className="main-container">
			 <div className="pd-ltr-20 xs-pd-20-10">
				 <div className="min-height-200px">
					 <div className="page-header">
						 <div className="row">
							 <div className="col-md-6 col-sm-12">
								 <div className="title">
									 <h4>Fiar'Occaz</h4>
								 </div>
								 <nav aria-label="breadcrumb" role="navigation">
									 <ol className="breadcrumb">
										 <li className="breadcrumb-item active" aria-current="page">Bienvenue : {sessionStorage.getItem("user")}</li>
									 </ol>
								 </nav>
							 </div>
						 </div>
					 </div>
				 </div>
				 </div>
			 </div>
			</>
		);
	}
   
};

export default withNavigateHook(Header);
