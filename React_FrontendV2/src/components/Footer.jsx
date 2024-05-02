import React, {useEffect, useRef} from "react";
import "../App.css";
function Footer() {
	const currentYear = useRef(null);
	useEffect(() => {
		// Obtenemos el elemento del span que mostrará el año actual
		currentYear.current = document.getElementById("currentYear");
		// Obtenemos el año actual
		const year = new Date().getFullYear();
		// Actualizamos el contenido del span con el año actual
		currentYear.current.textContent = year;
	}, []);
	return (
<footer style={{ bottom: 0, width: "100%" }}>
<section
	className="row"
	style={{
		height: "15em",
		backgroundColor: "black",
		color: "white",
		listStyle: "none",
	}}
>
	<div className="col"></div>
	<article style={{ marginTop: "4em" }} className="col-1">
		<a target="_blank">
			<img
				src="logofooter.png"
				style={{ height: "5em" }}
				loading="lazy"
				alt="Logo Footer 1"
			/>
		</a>
	</article>
	<article style={{ marginTop: "4em" }} className="col-1">
		<a href="https://www.izenpe.eus/inicio/">
			<img
				src="bakq.png"
				style={{ height: "5em" }}
				loading="lazy"
				alt="Logo Footer 2"
			/>
		</a>
	</article>
	<article style={{ marginTop: "4em" }} className="col-1">
		<a href="https://www.bizkaia.eus/es/inicio">
			<img
				src="bforualdundia.png"
				style={{ height: "5em" }}
				loading="lazy"
				alt="Logo Footer 3"
			/>
		</a>
	</article>
	<article className="col" style={{ marginLeft: "6em" }}>
		<nav style={{ textAlign: "left", marginTop: "2.5em" }}>
			<a style={{ textDecoration: 'none', color: 'white'}} className="row">Condiciones generales</a>
			<a style={{ textDecoration: 'none', color: 'white'}} className="row">10T</a>
			<a style={{ textDecoration: 'none', color: 'white'}} className="row">Nomina</a>
			<a style={{ textDecoration: 'none', color: 'white'}} className="row">Seguridad y Protección</a>
			<a style={{ textDecoration: 'none', color: 'white'}} className="row">Declaraciones</a>
			<a style={{ textDecoration: 'none', color: 'white'}} className="row">FAQs</a>
		</nav>
	</article>
	<article
		style={{ marginTop: "2em", textAlign: "left" }}
		className="col-2"
	>
		<h5>CONTACTO</h5>
		<a
			style={{ textDecoration: "none" }}
			className="row mb-1"
			href="https://goo.gl/maps/CfaBBSr9raGGYMabA"
			target="_blank"
		>
			<span style={{ color: "white" }}>
				Plaza Kurutzezar, Zaldibar (48250), Bizkaia
			</span>
		</a>
		<a
			style={{ textDecoration: "none" }}
			className="row mb-1"
			href="tel:%20+34%20938%2056%2077%2088"
		>
			<span
				style={{ color: "white" }}
				className="elementor-icon-list-text"
			>
				Tel: +34 634 412 771
			</span>
		</a>
		<a
			style={{ textDecoration: "none" }}
			className="row mb-1"
			href="mailto:%20info@arenamotor.es"
			target="_blank"
		>
			<span style={{ color: "white" }}>webseobilbao@gmail.com</span>
		</a>
		<p className="mb-3">
			{" "}
			&copy; 2023-<span id="currentYear"></span>, Aritz Robledo
		</p>
	</article>
	<div className="col"></div>
</section>
</footer>
	);
};
export default Footer;