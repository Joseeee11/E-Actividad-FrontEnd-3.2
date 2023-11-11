const registroModel = require("../models/registro.m.js")

//importamos bcrypt
const bcryptjs = require('bcryptjs');

class registroControllers {
    agregar(body) {
        return new Promise( async(resolve, reject) => {
            console.log('estamos en controladores de registro')
            const {nombre_apellido, correo, contrasena} = body;
            const datos = {nombre_apellido, correo, contrasena};

            console.log(datos);

            if (!datos || !datos.nombre_apellido || !datos.correo || !datos.contrasena ) {
                return reject("Ingresa los datos correctamente")
            }

            //Encriptar contraseñas
            var contrasenaHash = await bcryptjs.hash(datos.contrasena, 8);
            datos.contrasena = contrasenaHash;

            registroModel.agregar(datos)
            .then(() =>  {
                resolve(`Se agregó correctamente el personal: ${datos.nombre_apellido}`)
            })
            .catch((err) => {
                reject(err)
            })
        })
    }
}

module.exports = new registroControllers();