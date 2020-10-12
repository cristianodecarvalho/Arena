const Usuario = require('../models/Usuario')

var usuarios = []

module.exports = {
    async store(req, res){
        const { email } = req.body;

        const usuario = new Usuario(email)

        usuarios.push(usuario)

        return res.json(usuario);
    },
    async buscar(email){
        return usuarios.filter( usuario => {
            usuario.email == email
        })
    }

}