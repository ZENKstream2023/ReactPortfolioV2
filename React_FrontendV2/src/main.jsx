import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter /* NavLink*/ } from "react-router-dom";
//import facelogo from "../src/assets/images/face_logo.png";
import App from "./App.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
const SearchApp = () => {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</React.StrictMode>
	);
};

ReactDOM.createRoot(document.getElementById("root")).render(<SearchApp />);
