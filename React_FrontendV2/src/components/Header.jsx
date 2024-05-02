import React from "react";
import "../App.css";
function Header() {
	return (
<header
    style={{
        position: "fixed",
        backgroundColor: "white",
        zIndex: 100,
        width: "100%",
        height: "8em",
    }}
    className="row cover-container d-flex p-3 mx-auto shadow-sm"
>   
        <a className="col-1" href="/">
        <img
            style={{height:'7em', width:'7em'}}
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
        <a
            href="/login"
            className="fw-bold py-1 btn btn-primary"
            style={{
                height: "2.5em",
                marginInline: "1em",
                background: "linear-gradient(to right, #df18df, #4c9ae7)",
            }}
            type="submit"
        >
            Acceder
        </a>
    </nav>
</header>
	);
};
export default Header;