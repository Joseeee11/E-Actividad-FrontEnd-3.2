const connection = require('../db/myslq');

class loginModel{
    verificaUser(parametro){
        console.log(parametro);
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM `usuarios` WHERE `correo` = ?' , parametro , function (error, results, fields) {
                if (error){
                   return reject ("Error al buscar en la DB el correo en la base de datos")
                   
                }  
                if (results[1]) {
                    return reject ("Mas de un usuario encontrado")
                }
                if (Object.keys(results).length === 0) {
                    console.log(typeof(results));
                    return reject ('Usuario no encontrado')
                }-
                resolve (results[0]);
            })
        })
    }
}


module.exports= new loginModel();