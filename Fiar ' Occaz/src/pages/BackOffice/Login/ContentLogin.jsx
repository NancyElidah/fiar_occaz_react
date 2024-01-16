import image_login from "../../assets/vendors/images/imageshop.png"
import personne from "../../assets/vendors/images/briefcase.svg"
const ContentLogin = () => {
    return (
        <>
            <div class="login-wrap d-flex align-items-center flex-wrap justify-content-center">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-md-6 col-lg-7">
					<img src={image_login} alt="" />
				</div>
				<div class="col-md-6 col-lg-5">
					<div class="login-box bg-white box-shadow border-radius-10">
						<div class="login-title">
							<h2 class="text-center text-primary">Connection sur Fiar'Occaz</h2>
						</div>
						<form>
							<div class="select-role">
								<div class="btn-group btn-group-toggle" data-toggle="buttons">
									<label class="btn">
										<input type="radio" name="options" id="admin" />
                                            <div class="icon"><img src={personne} class="svg" alt="" /></div>
                                            <span>Je suis</span>
                                            l'admin
									</label>
									<label class="btn">
										<input type="radio" name="options" id="user" />
										<div class="icon"><img src={personne} class="svg" alt="" /></div>
										<span>Je suis </span>
										un Client
									</label>
								</div>
							</div>
							<div class="input-group custom">
								<input type="text" class="form-control form-control-lg" placeholder="Username" />
								<div class="input-group-append custom">
									<span class="input-group-text"><i class="icon-copy dw dw-user1"></i></span>
								</div>
							</div>
							<div class="input-group custom">
								<input type="password" class="form-control form-control-lg" placeholder="**********" />
								<div class="input-group-append custom">
									<span class="input-group-text"><i class="dw dw-padlock1"></i></span>
								</div>
							</div>
							<div class="row">
								<div class="col-sm-12">
									<div class="input-group mb-0">
										
										<a class="btn btn-primary btn-lg btn-block" href="index.html"> Se Connecter</a>
									</div>
									<div class="font-16 weight-600 pt-10 pb-10 text-center" data-color="#707373">OU</div>
									<div class="input-group mb-0">
										<a class="btn btn-outline-primary btn-lg btn-block" href="register.html">S'inscrire</a>
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
export default ContentLogin;