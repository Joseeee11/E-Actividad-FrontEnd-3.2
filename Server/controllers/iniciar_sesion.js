const iniciar_models = require('../models/inicar_sesion')
const bcryptjs = require('bcryptjs')


class login{
    async iniciar_sesion(req, res, next){
        var parámetro = req.body
        try {
            var usuario = await iniciar_models.verificaUser(parámetro.email)
            console.log(usuario.contrasena);


            let contraseñaVerificada = await bcryptjs.compare(parámetro.password, usuario.contrasena)
            if (!contraseñaVerificada) {
                throw ("contraseña incorrecta")
            }
            
            res.json({
                    
                    "confirmacion": true
                  
            }).status('200')
            
        } catch (error) {
            if (error == "Usuario no encontrado") {
                console.log(error);
            }

            // para proteger al usuario siempre usamos un mensaje que generalice el error
            res.json({
                "error":"Usuario o contraseña incorrectos",
                "confirmacion": false

            }).status('404')
        }
    }
}
module.exports = new login();