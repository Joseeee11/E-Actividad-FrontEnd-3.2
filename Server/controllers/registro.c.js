//  Código escrito por Cristian José
const { verify } = require("jsonwebtoken");
const registroModel = require("../models/registro.m.js");
const iniciar_models = require('../models/inicar_sesion')
const bcryptjs = require('bcryptjs');
const validator = require('validator')


class registroControllers {
    async agregar(req, res, next) {
        const {name, email, password, confirm_password} = req.body;
        try {
            // confirmamos que los datos ingresados sean correctos 
            if ( !name || !email || !password || !confirm_password ) {
                throw("Ingresa los datos correctamente");
            };
            if (password != confirm_password) {
                throw('Las contraseñas no coinciden');
            };
            // Validamos si el correo esta bien estructurado
            if (!validator.isEmail(email)) {
                throw('Correo invalido')
            }

            // encriptamos la contraseña
            let contrasena =await bcryptjs.hash(password, 8);
            let correo = email;
            let nombre_apellido= name;

            // Luego podemos guardar todos los datos 
            let datos = { nombre_apellido, correo, contrasena}

            
            try { 
                // Verificamos si el correo fue registrado anteriormente 
                const repetidoVerificador = await iniciar_models.verificaUser(email)
                if (repetidoVerificador) {
                  
                    throw("Correo ya registrado")
                }
            } catch (error) {
                if (error == "Mas de un usuario encontrado" ) {
                    throw("Corro registrado varias veces")
                }
                if (error=="Correo ya registrado") {
                    throw(error)
                }
                if (error !="Usuario no encontrado") {
                    console.log(error);
                    throw('Error inesperado') 
                }
            }
            const registrar = await registroModel.agregar(datos)

            if (registrar!='Se agrego correctamente') {
                throw('error al registrar en la DB')
            }else{
                res.json({
                
                    "confirmacion": true
                
            }).status('200')

            }

        } catch (error) {
            console.log(error);
            res.status('404').json({

                "error":error,
                "confirmacion": false

            })
        }
    }
}

module.exports = new registroControllers();