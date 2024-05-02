import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css";
function HomePage() {
	return (
			<div>
				<Header/>
			<div className="banner">
			<div style={{  zIndex: 3, width:'100vw'}}>
				<h1 style={{  zIndex: 2 , color: "white", textAlign: "center" }}>
					¡Bienvenido a nuestra plataforma de RRHH! <br/> Juntos, creamos un entorno donde el talento brilla y las oportunidades prosperan.
				</h1>
				<p style={{ color: "white", textAlign: "center"}} className="lead">
					Encuentra tu sucursal.
				</p>
				<p style={{ textAlign: "center"}} className="lead">
					<a href="/sucursales" className="fw-bold py-1 border-white btn btn-primary pt-2" style={{ height: "2.5em", background: "linear-gradient(to right, #df18df, #4c9ae7)" }} type="submit">
						¡AQUÍ!
					</a>
								</p>
							</div>
						</div>
						<Footer/>
			</div>
	);
}

export default HomePage;
