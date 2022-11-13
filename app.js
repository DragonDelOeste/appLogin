//Configuración
const express = require('express');
const app = express();
const controller = require('./controller/loginController');
const router = express.Router();
app.use(router);

app.use(controller);

const PUERTO = process.env.PORT || 3000;

    app.listen(PUERTO, () => {
        console.log(`appLogin escuchando en puerto 3000`);
    });
