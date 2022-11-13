const axios = require('axios');

const getDataLogin = (usu, pass) => {
    return new Promise(async (resolve, reject) => {

        const data = {
            usuario:'admin',
            password:'admin',
            respuesta:'false'
        };

        if(data.usuario == usu && data.password == pass){
           resolve(true);
        }else{
            resolve(false);
        }
       /* axios(data)
            .then(function (response) {
                console.log(response);
                if(respose.respuesta){
                    resolve(true);
                }else{
                    resolve(false);
                }
            })
            .catch(function (error) {
                console.log(error);
                return reject(error);
            });*/
    })
}

const postIngresoBarra= () => {
    return new Promise(async (resolve, reject) => {

        const config = {
            method: 'get',
            url: 'http://localhost:4002/historico/data',
            headers: {}
        };
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                resolve(response.data);
            })
            .catch(function (error) {
                console.log(error);
                return reject(error);
            });
    })
}

module.exports = {
    getDataLogin
};