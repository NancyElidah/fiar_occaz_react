import { Link } from "react-router-dom";
import register from "../../assets/src/images/login.png"
const HeadLogin = () => {
    return (
        <div class="login-header box-shadow">
            <div class="container-fluid d-flex justify-content-between align-items-center">
                <div class="brand-logo">
                    <a href="login.html">
                        <img src={register} alt="" />
                    </a>
                </div>
                <div class="login-menu">
                    <ul>
                        <li><Link to="/accueil">Inscription</Link></li>
                    </ul>
                </div>
            </div>
	    </div>
    )
}
export default HeadLogin;