import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import "../App.css";
import { NavLink } from "react-router-dom";
import Global from "@/Global";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
export const Sidebar = () => {
	const url = Global.url;
	const navigate = useNavigate();
	const handleLogout = async () => {
		try {
			// Llama a la API en el backend para eliminar las cookies
			await axios.post(url + "api/logout");
			// Redirige al usuario a la página de inicio de sesión u otra página apropiada
			navigate("/login");
		} catch (error) {
			console.error("Error al cerrar sesión:", error);
			// Manejar errores según sea necesario
		}
	};
	const config = () => {
		// Aquí puedes cambiar la URL a la que deseas navegar
		navigate("/config");
	};
	///////////////////////////INFORMATION NEEDED OF TWITCH CHANNEL//////////////////
	const [channelName, setChannelName] = useState(null);
	const [channelImageUrl, setChannelImageUrl] = useState(null);
	const [channelConnected, setChannelConnected] = useState(null);
	const [channelOnstream, setChannelOnstream] = useState(null);
	const [channelCollabchat, setChannelCollabchat] = useState(null);
	const [channelCollaborations, setChannelCollaborations] = useState(null);
	const [channelEnableHost, setChannelEnableHost] = useState(null);
	const [channelEnableMod, setChannelEnableMod] = useState(null);
	const [channelEnableRaids, setChannelEnableRaids] = useState(null);
	const [channelGodmodPrime, setChannelGodmodPrime] = useState(null);
	useEffect(() => {
		// Realizar la solicitud HTTP al backend
		axios
			.get(url + `api/channels`)
			.then((response) => {
				// Actualizar el estado con la información del canal
				setChannelName(response.data.displayName);
				setChannelImageUrl(response.data.profileImageUrl);
				setChannelConnected(response.data.connected);
				setChannelOnstream(response.data.onstream);
				setChannelCollabchat(response.data.collabchat);
				setChannelCollaborations(response.data.collaborations);
				setChannelEnableHost(response.data.enablehost);
				setChannelEnableMod(response.data.enablemod);
				setChannelEnableRaids(response.data.enableraids);
				setChannelGodmodPrime(response.data.godmodprime);
			})
			.catch((error) => {
				console.error("Error al obtener la información del canal:", error);
			});
	}, []);

	return (
		<div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
			<div
				className="offcanvas-md offcanvas-end bg-body-tertiary "
				tabIndex="-1"
				id="sidebarMenu"
				aria-labelledby="sidebarMenuLabel"
			>
				<div
					className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark "
					style={{ minHeight: "100vh" }}
				>
					<svg className="bi pe-none me-2" width="40" height="32">
						<use xlinkHref="#bootstrap" />
					</svg>
					<span className="fs-4 text-center">
						<h2>
							<b>GLOGLO</b>
						</h2>
					</span>
					<hr />
					<ul className="nav nav-pills flex-column mb-auto">
						<li className="nav-item">
							<NavLink
								activeClassName="active-nav-link"
								className="nav-link text-white d-flex align-items-center gap-2"
								to="/channels"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-cast"
									viewBox="0 0 16 16"
								>
									<path d="m7.646 9.354-3.792 3.792a.5.5 0 0 0 .353.854h7.586a.5.5 0 0 0 .354-.854L8.354 9.354a.5.5 0 0 0-.708 0" />
									<path d="M11.414 11H14.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h3.086l-1 1H1.5A1.5 1.5 0 0 1 0 10.5v-7A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v7a1.5 1.5 0 0 1-1.5 1.5h-2.086z" />
								</svg>
								Panel
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								activeClassName="active-nav-link"
								className="nav-link text-white d-flex align-items-center gap-2"
								to="/notifications"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									class="bi bi-app-indicator"
									viewBox="0 0 16 16"
								>
									<path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z" />
									<path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
								</svg>
								Notificaciones
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								activeClassName="active-nav-link"
								className="nav-link text-white d-flex align-items-center gap-2"
								to="/moderation"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-shield-check"
									viewBox="0 0 16 16"
								>
									<path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
									<path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0" />
								</svg>
								Permanencia
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								activeClassName="active-nav-link"
								className="nav-link text-white d-flex align-items-center gap-2"
								to="/commands"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-chat-right-quote"
									viewBox="0 0 16 16"
								>
									<path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
									<path d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
								</svg>
								Atención
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								activeClassName="active-nav-link"
								className="nav-link text-white d-flex align-items-center gap-2"
								to="/rewards"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-gem"
									viewBox="0 0 16 16"
								>
									<path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z" />
								</svg>
								Ofertas
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								activeClassName="active-nav-link"
								className="nav-link text-white d-flex align-items-center gap-2"
								to="/info"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-info-circle"
									viewBox="0 0 16 16"
								>
									<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
									<path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
								</svg>
								Información
							</NavLink>
						</li>
					</ul>
					<hr />
					<Dropdown>
						<Dropdown.Toggle
							style={{
								background: "linear-gradient(to right, #6e01ff, #c520eb)",
								color: "white",
							}}
							href="#"
							className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<strong>Perfil</strong>
						</Dropdown.Toggle>
						<Dropdown.Menu className="dropdown-menu dropdown-menu-dark text-small shadow">
							<Dropdown.Item>
								<div
									onClick={config}
									className="dropdown-item  text-white d-flex align-items-center gap-2"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="bi bi-gear"
										viewBox="0 0 16 16"
									>
										<path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
										<path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
									</svg>
									Configuración
								</div>
							</Dropdown.Item>
							<Dropdown.Item>
								<hr className="dropdown-divider" />
							</Dropdown.Item>
							<Dropdown.Item>
								<div className="dropdown-item" onClick={handleLogout}>
									Cerrar Sesión
								</div>
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</div>
		</div>
	);
};
export default Sidebar;
