import { Link } from "react-router-dom";
import register from "../../assets/src/images/login.png"
const HeadLogin = () => {
    return (
        <div className="login-header box-shadow">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <div className="brand-logo">
                    <a href="login.html">
                        <img src={register} alt="" />
                    </a>
                </div>
                <div className="login-menu">
                    <ul>
                        <li><Link to="/accueil">Inscription</Link></li>
                    </ul>
                </div>
            </div>
	    </div>
    )
}
export default HeadLogin;