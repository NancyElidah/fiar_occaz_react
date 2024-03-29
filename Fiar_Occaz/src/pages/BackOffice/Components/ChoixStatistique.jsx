import { Link } from "react-router-dom";
import Footer from "../../Footer";
import Header from "../../Header";


const ChoixStatistique = () => {
    return (
        <>
            <Header />
            <div className="main-container" style={{marginTop:-150}}>
                <div className="pd-ltr-20 xs-pd-20-10">
                    <div className="min-height-200px">
                        <div className="page-header">
                        <div className="pd-20 card-box mb-30">
					<div className="clearfix mb-20">
						<div className="pull-left">
							<h4 className="text-blue h4" style={{color:"blue"}}>Statistique des nombres de voiture</h4>
							<p>Quelque <code>.choix pour chaque Statistique</code></p>
						</div>
					</div>
					<table className="table">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Element</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>Type de voiture</td>
								<td>
                                    <div>
                                        <Link to={`/${sessionStorage.getItem("token")}/stat_element/:${"type"}`} className="btn btn-primary btn-sm scroll-click" rel="content-y"  data-toggle="collapse" role="button"><i className="fa fa-eye"></i></Link>
                                    </div>
                                </td>
                                
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>Marque de Voiture</td>
								<td>
                                    <div>
                                        <Link to={`/${sessionStorage.getItem("token")}/stat_element/:${"marque"}`} className="btn btn-primary btn-sm scroll-click" rel="content-y"  data-toggle="collapse" role="button"><i className="fa fa-eye"></i></Link>
                                    </div>
                                </td>
							</tr>
                            <tr>
								<th scope="row">4</th>
								<td>Modèle</td>
								<td>
                                    <div>
                                        <Link to={`/${sessionStorage.getItem("token")}/stat_element/:${"model"}`} className="btn btn-primary btn-sm scroll-click" rel="content-y"  data-toggle="collapse" role="button"><i className="fa fa-eye"></i></Link>
                                    </div>
                                </td>
							</tr>
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
            <Footer/>
        </>
    );
}
export default ChoixStatistique;