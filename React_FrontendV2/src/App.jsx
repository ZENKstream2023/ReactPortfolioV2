import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NotFoundPage from "@pages/NotFoundPage";
import HomePage from "@pages/HomePage";
import Login from "@pages/Login";
import Sucursales from "@pages/Sucursales";
import Panel from "@pages/Panel";

function App() {
	return (
		<Routes>
			{/* Definir la ruta de la página de inicio */}
			<Route exact path="/" element={<HomePage />} />
			<Route exact path="/login" element={<Login />} />
			<Route exact path="/sucursales" element={<Sucursales />} />
			<Route exact path="/panel" element={<Panel />} />
			{/*<Route path="/contact/search/:search" element={<Search />} />
			<Route
				path="/redirect/:search"
				component={(props) => {
					var search = props.match.params.search;
					return <Redirect to={"/contact/search/" + search} />;
				}}
			/>*/}
			{/* Ruta por defecto en caso de que ninguna coincida */}
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
}

export default App;
