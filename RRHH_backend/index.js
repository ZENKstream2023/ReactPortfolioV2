"use strict";
const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const http = require("http");
const https = require("https");
const fs = require("fs");
const options = {
	key: fs.readFileSync("localhost.key"), // Lee el archivo de clave privada
	cert: fs.readFileSync("localhost.crt"), // Lee el archivo de certificado
};
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3200;
const routes = require("./routes/routes");
app.use(bodyParser.json());
app.use(cookieParser());
app.use(helmet());
const { verifyToken } = require("./security/authMiddleware"); // Importa el middleware de autenticación

// Middleware de autenticación global
app.use(verifyToken);
// Middleware para redirigir el tráfico HTTP a HTTPS
app.use((req, res, next) => {
    if (req.secure) {
        next();
    } else {
        res.redirect('https://' + req.headers.host + req.url);
    }
});
// CORS
//app.use(cors());
/*const corsOptions = {
        origin: "https://localhost:3200",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true,

        optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
*/
// Sirve el frontend estático desde /var/www/frontend/distI
app.use(express.static(path.join("../React_FrontendV2/dist")));
// Definir la política CSP
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "img-src 'self' https://*.jtvnw.net https://www.google.com/*");
  next();
});

// Manejar todas las demás rutas y redirigirlas al archivo de entrada del frontend
// Middleware para excluir rutas que comiencen por "/api"
app.use((req, res, next) => {
	if (req.originalUrl.startsWith("/api")) {
		// Si la ruta comienza con "/api", pasa al siguiente middleware
		next();
	} else {
		res.sendFile(path.resolve("../React_FrontendV2/dist/", "index.html"));
	}
});

// Rutas API
app.use("/api", routes);
app.use((req, res, next) => {
	res.setHeader("Strict-Transport-Security", "max-age=31536000;");
	next();
});
// Middleware de manejo de errores
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({
		error: "Error interno del servidor",
		message: err.message,
	});
});

app.use((req, res, next) => {
	console.log(req.body); // Agrega este registro
	bodyParser.json()(req, res, next);
});
// Conexión a la base de datos MongoDB
mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		console.log("Conexión a la base de datos establecida correctamente");
	})
	.catch((error) => {
		console.error("Error al conectar a la base de datos:", error.message);
	});

// Configura el servidor HTTPS
const httpsServer = https.createServer(options, app);

// Define el puerto para el servidor HTTPS
const httpsPort = process.env.HTTPS_PORT || 3200;

// Inicia el servidor HTTPS
httpsServer.listen(httpsPort, () => {
    console.log("Servidor HTTPS iniciado en el puerto " + httpsPort);
});