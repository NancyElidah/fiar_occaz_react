import "../assets/vendors/images/apple-touch-icon.png"
import "../assets/vendors/images/favicon-32x32.png"
import "../assets/vendors/images/favicon-16x16.png"
import "../assets/vendors/styles/core.css"
import "../assets/vendors/styles/icon-font.min.css"
import "../assets/vendors/styles/style.css"
import HeadLogin from "./Login/HeadLogin"
import ContentLogin from "./Login/ContentLogin"

const Login = () => {
    return (
		<>
			<HeadLogin />
			<ContentLogin />
		</>
        
    )
}
export default Login;