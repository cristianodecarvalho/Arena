const Usuario = require('../models/Usuario')

var usuarios = []

function buscarPorEmail(email){
    return usuarios.find( usuario => usuario.email == email)
}

module.exports = {
    async index(req, res){
        return res.json(usuarios);
    },
    async store(req, res){
        const { email } = req.body;

        let usuario = buscarPorEmail(email);

        if(!usuario){
            usuario = new Usuario(usuarios.length, email);
            usuarios.push(usuario)
        }

        return res.json(usuario);

    },
    getUsuarios(){
        return usuarios
    }
    
}