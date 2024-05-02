import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function LoginView() {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [formType, setFormType] = useState("signin");
	const navigate = useNavigate();
	const handleSignIn = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("https://localhost:3200/api/signin", {
				email,
				password,
			});
			if (response.data.status === "ok") {
				// Redireccionar a la página del panel después del inicio de sesión exitoso
				console.log("INICIO SESION")
				navigate("/panel");
			}
		} catch (error) {
			// Manejar el error si la solicitud falla
			console.log(error);
		}
	};
	const createAccount = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("https://localhost:3200/api/signup", {
				email,
				password,
			});
			if (response.data.status === "ok") {
				// Redireccionar a la página del panel después de crear la cuenta exitosamente

				navigate("/panel");
			}
		} catch (error) {
			// Manejar el error si la solicitud falla
			console.log(error);
		}
	};

	return (
		<div>
			<header
    style={{
        position: "fixed",
        backgroundColor: "white",
        zIndex: 100,
        width: "100%",
        height: "6em",
    }}
    className="row cover-container d-flex p-1 mx-auto shadow-sm"
>
<a className="col-1" href="/">
        <img
            style={{height:'6em', width:'6em'}}
            src="logorrhh.png"
            className="col-1 float-md-start mb-5"
        />
        </a>
    <nav
        style={{ justifyContent: "right", marginTop:'1.5em', fontSize: "1.15em" }}
        className="col-11 nav"
    >
        <a
            style={{ color: "black" }}
            className="nav-link fw-bold py-1 active"
            aria-current="page"
            href="/"
        >
            Inicio
        </a>
        <a
            style={{ color: "black" }}
            className="nav-link fw-bold py-1"
            href="/sucursales"
        >
            Sucursales
        </a>
        <a
            style={{ color: "black" }}
            className="nav-link fw-bold py-1"
            href="/panel"
        >
            Panel
        </a>
    </nav>
</header>

		<div className="banner">
			<div style={{ marginTop: "15em", paddingInline: "40%", zIndex: 1, width:'100vw', textAlign:'center'}}>
				{formType === "signin" ? (
					<form onSubmit={handleSignIn} className="signin">
						<img
							className="mb-4"
							src="logofooter.png"
							alt=""
							width="160em"
							height="130em"
						/>
						<h1 className="h3 mb-3 fw-normal"></h1>
						<div className="form-floating mb-2">
							<input
								type="email"
								className="form-control"
								id="floatingInput"
								placeholder="name@example.com"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<label htmlFor="floatingInput">Email</label>
						</div>
						<div className="form-floating">
							<input
								type="password"
								className="form-control"
								id="floatingPassword"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<label htmlFor="floatingPassword">Contraseña</label>
						</div>
						<button
							className="btn btn-primary w-100 py-2 mt-3"
							style={{
								background: "linear-gradient(to right, #df18df, #4c9ae7)",
							}}
							type="submit"
						>
							Iniciar Sesión
						</button>
						<div className="text-center">
							<button
								style={{ textDecoration: 'none', color: 'white'}}
								className="btn btn-link"
								onClick={() => setFormType("signup")}
							>
								Crear Cuenta
							</button>
						</div>
					</form>
				) : (
					<form onSubmit={createAccount} className="signup">
						<img
							className="mb-4"
							src="logofooter.png"
							alt=""
							width="160em"
							height="130em"
						/>
						<h1 className="h3 mb-3 fw-normal"></h1>
						<div className="form-floating mb-2">
							<input
								type="email"
								className="form-control"
								id="floatingInput"
								placeholder="name@example.com"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<label htmlFor="floatingInput">Email</label>
						</div>
						<div className="form-floating">
							<input
								type="password"
								className="form-control"
								id="floatingPassword"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<label htmlFor="floatingPassword">Contraseña</label>
						</div>
						<button
							className="btn btn-primary w-100 py-2 mt-3"
							style={{
								background: "linear-gradient(to right, #df18df, #4c9ae7)",
							}}
							type="submit"
						>
							Crear Cuenta
						</button>
						<div className="text-center">
							<button
								style={{ textDecoration: 'none', color: 'white'}}
								className="btn btn-link"
								onClick={() => setFormType("signin")}
							>
								Entrar
							</button>
						</div>
					</form>
				)}
			</div>
		</div>
		</div>
	);
}

export default LoginView;
