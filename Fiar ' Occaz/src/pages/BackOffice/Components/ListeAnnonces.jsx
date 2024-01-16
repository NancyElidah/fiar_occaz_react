import Footer from "../../Footer";
import Header from "../../Header";
import test from "../../assets/vendors/images/banner-img.png";
import { Link } from "react-router-dom";
const ListeAnnonce = () =>{
    return (
        <>
        <Header/>
        <div className="main-container" style={{marginTop:-150}}>
            <div className="row" style={{float:"left",width:500,marginLeft:20,marginRight:20,marginTop:20}}>
                    <div >
                        <div className="card-box pd-30 pt-10 height-100-p">
                            <h2 className="mb-30 h4">Browser Visit</h2>
                            <div className="col-md-7" style={{marginLeft:70}}>
                                    <img src={test} alt="" />
                            </div>
                            <div className="col-md-10" style={{marginLeft:30}}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ut harum quod obcaecati, ex voluptatibus tempora pariatur, voluptas qui magni libero, quo mollitia. Iure tempora cumque sint. Quas, ratione quaerat.</p>
                            </div>
                            <div className="pull-right" style={{marginTop:-20 , paddingLeft:20}}>
                                <Link to="/gestion_couleur" className="btn btn-primary btn-sm scroll-click" rel="content-y"  data-toggle="collapse" role="button" ><i className="fa fa-eye"></i></Link>
                                <Link to="/gestion_type" className="btn btn-primary btn-sm scroll-click" rel="content-y"  data-toggle="collapse" role="button"><i className="fa fa-check"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="row" style={{float:"left",width:500,marginLeft:20,marginRight:20,marginTop:20}}>
                <div >
                    <div className="card-box pd-30 pt-10 height-100-p">
                        <h2 className="mb-30 h4">Browser Visit</h2>
                        <div className="col-md-7" style={{marginLeft:70}}>
                                <img src={test} alt="" />
                        </div>
                        <div className="col-md-10" style={{marginLeft:30}}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ut harum quod obcaecati, ex voluptatibus tempora pariatur, voluptas qui magni libero, quo mollitia. Iure tempora cumque sint. Quas, ratione quaerat.</p>
                        </div>
                        <div className="pull-right" style={{marginTop:-20}}>
                            <Link to="/gestion_couleur" className="btn btn-primary btn-sm scroll-click" rel="content-y"  data-toggle="collapse" role="button"><i className="fa fa-eye"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{float:"left",width:500,marginLeft:20,marginRight:20,marginTop:20}}>
                <div >
                    <div className="card-box pd-30 pt-10 height-100-p">
                        <h2 className="mb-30 h4">Browser Visit</h2>
                        <div className="col-md-7" style={{marginLeft:70}}>
                                <img src={test} alt="" />
                        </div>
                        <div className="col-md-10" style={{marginLeft:30}}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ut harum quod obcaecati, ex voluptatibus tempora pariatur, voluptas qui magni libero, quo mollitia. Iure tempora cumque sint. Quas, ratione quaerat.</p>
                        </div>
                        <div className="pull-right" style={{marginTop:-20}}>
                                        <Link to="/gestion_couleur" className="btn btn-primary btn-sm scroll-click" rel="content-y"  data-toggle="collapse" role="button"><i className="fa fa-eye"></i></Link>
                                    </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{float:"left",width:500,marginLeft:20,marginRight:20,marginTop:20}}>
                <div >
                    <div className="card-box pd-30 pt-10 height-100-p">
                        <h2 className="mb-30 h4">Browser Visit</h2>
                        <div className="col-md-7" style={{marginLeft:70}}>
                                <img src={test} alt="" />
                        </div>
                        <div className="col-md-10" style={{marginLeft:30}}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ut harum quod obcaecati, ex voluptatibus tempora pariatur, voluptas qui magni libero, quo mollitia. Iure tempora cumque sint. Quas, ratione quaerat.</p>
                        </div>
                        <div className="pull-right" style={{marginTop:-20}}>
                                        <Link to="/gestion_couleur" className="btn btn-primary btn-sm scroll-click" rel="content-y"  data-toggle="collapse" role="button"><i className="fa fa-eye"></i></Link>
                                    </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );

};
export default ListeAnnonce ;