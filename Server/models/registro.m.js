// const connection = require("../db/myslq");

class registroModel {
    //agregar un usuario
    agregar(datos) {
        // aquí falta una promesa
        connection.query('INSERT INTO usuarios set ?', [datos], function (error, results, fields) {
            if (error) reject (error);
            resolve("Se agrego correctamente");
        })
    }
}

module.exports = new registroModel;