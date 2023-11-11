const { log } = require('debug/src/browser')
const iniciar_models = require('../models/inicar_sesion')



class login{
    async iniciar_sesion(req, res, next){
        var parámetro = req.body
        try {
            console.log(parámetro.email);
            var usuario = await iniciar_models.verificaUser(parámetro.email)
            console.log(usuario);
            res.json({
                
                    "confirmacion": true
                  
            }).status('200')
            
        } catch (error) {
            if (error = "Usuario no encontrado") {
                res.json().status('404')
            }
            console.log(error);
            console.log("error controller");
        }
    }
}
module.exports = new login();