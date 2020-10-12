const Arena = require('../models/Arena')
const SessaoController = require('./SessaoController')

var arenas = []

function buscar(usuario){
    arenas.find( arena => arena.usuario == usuario)
}

function buscarPorId(id){
    return usuarios.find( usuario => usuario.id == id)
}

module.exports = {
    async index(req, res){
        return res.json(arenas)
    },
    async store(req, res){
       
        const { filename } = req.file;
        const { nome, endereco, preco, telefone } = req.body;
        const { id } = req.headers;

        const usuarios = await SessaoController.getUsuarios()
   
        const usuario = usuarios.find( usuario => usuario.id == id)

        if(!usuario){
            return res.status(400).json({ error: 'Usuario nao existe!'})
        }

        const arena = new Arena(filename, nome, preco, endereco, id, telefone)

        arenas.push(arena)

        return res.json(arena)
    },
    async find(usuario){
        return buscar(usuario)
    }
}