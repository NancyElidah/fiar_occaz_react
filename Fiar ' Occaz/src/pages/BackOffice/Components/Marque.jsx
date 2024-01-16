import Footer from "../../Footer";
import Header from "../../Header";

const Marque = () => {
    return (
        <>
            <Header />
            <div className="main-container" style={{marginTop:-150}}>
                <div className="pd-ltr-20 xs-pd-20-10">
                    <div className="min-height-200px">
                        <div className="page-header">
					        <div className="clearfix">
						        <div className="pull-left">
                                    <h4 className="text-blue h4" style={{color:"blue"}}>Ajout Marque</h4>
                                    <p className="mb-20" style={{fontSize:10}}>Ajouter une marque de voiture</p>
						        </div>
                            </div>
                    <form>
                        <div className="form-group row" style={{marginLeft:50}}>
							<label className="col-sm-12 col-md-2 col-form-label" >Intitule </label>
							<div className="col-sm-12 col-md-8">
								<input className="form-control" type="text" placeholder="Marque ....." name="marque"/>
							</div>
                        </div>
                        <div className="col-sm-12 col-md-12">
							<button className="btn btn-primary" type="submit" style={{width:250 , marginLeft:410}}>Valider</button>
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
export default Marque;