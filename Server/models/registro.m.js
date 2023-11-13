//  Código escrito por Cristian José
const connection = require("../db/myslq");

class registroModel {
    //agregar un usuario
    agregar(datos) {
        // aquí falta una promesa
        return new Promise((resolve, reject) => {
        connection.query('INSERT INTO usuarios set ?', [datos], function (error, results, fields) {
            if (error){ 
                reject (error)
            };
            
            resolve("Se agrego correctamente");
        })
        })
    }
}

module.exports = new registroModel;