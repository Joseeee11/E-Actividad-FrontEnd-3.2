const { verify } = require("jsonwebtoken");
const registroModel = require("../models/registro.m.js");
const iniciar_models = require('../models/inicar_sesion')
const bcryptjs = require('bcryptjs');
const validator = require('validator')


class registroControllers {
    async agregar(req, res, next) {
     console.log('llega');
        const {name, email, password, confirm_password} = req.body;

       
        try {
            if ( !name || !email || !password || !confirm_password ) {
                throw("Ingresa los datos correctamente");
            };
            if (password != confirm_password) {
                throw('Las contraseñas no coinciden');
            };
            if (!validator.isEmail(email)) {
                throw('Correo invalido')
            }


            let contrasena =await bcryptjs.hash(password, 8);
            let correo = email;
            let nombre_apellido= name;

            let datos = { nombre_apellido, correo, contrasena}

            
            try {
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
                    throw('Error inesperado')
                    console.log(error);
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
            console.log('error');
            console.log(error);
            res.status('404').json({

                "error":error,
                "confirmacion": false

            })
        }
    }
}

module.exports = new registroControllers();