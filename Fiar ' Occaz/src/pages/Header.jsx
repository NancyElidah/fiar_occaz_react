import sary from "../pages/assets/src/images/fiara.png"
import { Link } from 'react-router-dom';
const Header = () => {
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
							<div className="dropdown-menu dropdown-menu-right">
								<div className="form-group row">
									<label className="col-sm-12 col-md-2 col-form-label">From</label>
									<div className="col-sm-12 col-md-10">
										<input className="form-control form-control-sm form-control-line" type="text"/>
									</div>
								</div>
								<div className="form-group row">
									<label className="col-sm-12 col-md-2 col-form-label">To</label>
									<div className="col-sm-12 col-md-10">
										<input className="form-control form-control-sm form-control-line" type="text"/>
									</div>
								</div>
								<div className="form-group row">
									<label className="col-sm-12 col-md-2 col-form-label">Subject</label>
									<div className="col-sm-12 col-md-10">
										<input className="form-control form-control-sm form-control-line" type="text"/>
									</div>
								</div>
								<div className="text-right">
									<button className="btn btn-primary">Search</button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
               </div>
               <div className="header-right">
 
            <div className="user-notification">
				<div className="dropdown">
					<a className="dropdown-toggle no-arrow" href="#" role="button" data-toggle="dropdown">
						<i className="icon-copy dw dw-notification"></i>
						<span className="badge notification-active"></span>
					</a>
				</div>
            </div>
            </div>
           </div>

	<div className="left-side-bar">
		<div className="brand-logo">
			<a href="index.html">
				<img src="vendors/images/deskapp-logo.svg" alt="" className="dark-logo"/>
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
				<Link to="/component" class="dropdown-toggle">
					<span className="micon dw dw-house-1"></span><span className="mtext">Gestion</span>
				</Link>
					</li>	
				</ul>
			</div>
			<div className="sidebar-menu">
				<ul id="accordion-menu">
				<li className="dropdown">
				<Link to="/liste_annonce" class="dropdown-toggle">
					<span className="micon dw dw-house-1"></span><span className="mtext">Annonce</span>
				</Link>
					</li>	
				</ul>
			</div>
		</div>
	</div>
	<div class="main-container">
		<div class="pd-ltr-20 xs-pd-20-10">
			<div class="min-height-200px">
				<div class="page-header">
					<div class="row">
						<div class="col-md-6 col-sm-12">
							<div class="title">
								<h4>Fiar'Occaz</h4>
							</div>
							<nav aria-label="breadcrumb" role="navigation">
								<ol class="breadcrumb">
									<li class="breadcrumb-item active" aria-current="page">Bienvenue sur Fiar'Occaz</li>
								</ol>
							</nav>
						</div>
						<div class="col-md-6 col-sm-12 text-right">
							<div class="dropdown">
								<a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-toggle="dropdown">
									January 2018
								</a>
								<div class="dropdown-menu dropdown-menu-right">
									<a class="dropdown-item" href="#">Export List</a>
									<a class="dropdown-item" href="#">Policies</a>
									<a class="dropdown-item" href="#">View Assets</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
		</div>
       </>
   );
};

export default Header;
