const cors = require('cors');
let express = require('express');
let app = express();
const loginService = require('../service/loginService')
const {query} = require("express");


app.post('/app/login', cors(), async (request, response) => {
    //llama servicio
    let usuario= request.query.usuario;
    let password= request.query.password;
    const myResponse = await loginService.getDataLogin(usuario,password);
    console.log(myResponse);
    return response.status(200).json(myResponse);
});


module.exports = app;