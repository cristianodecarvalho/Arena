//constructor do objeto
function Arena(imagem, nome, preco, endereco, usuario, telefone){
    this.usuario = usuario;
    this.nome = nome;
    this.imagem = imagem;
    this.preco = preco;
    this.endereco = endereco;
    this.telefone = telefone;
    this.imagem_url = `http://localhost:3333/files/${this.imagem}`
}

module.exports = Arena;