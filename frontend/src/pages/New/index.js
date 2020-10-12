import React, { useState, useMemo } from 'react';
import api from '../../services/api'
import './styles.css';
import camera from '../../assets/camera.png'

export default function New({history}){

    const [ nome, setNome] = useState('');
    const [ endereco, setEndereco] = useState('');
    const [ telefone, setTelefone] = useState('');
    const [ preco, setPreco] = useState('');
    const [ imagem, setImagem] = useState(null);

    const preview = useMemo( () => {
        return imagem ? URL.createObjectURL(imagem) : null;
    }, [imagem]
    )

    async function handleSubmit(event){
        event.preventDefault();
        
        const data = new FormData();
        const id = localStorage.getItem('usuario');

        data.append('imagem',imagem);
        data.append('nome', nome);
        data.append('endereco',endereco);
        data.append('telefone',telefone);
        data.append('preco', preco);

        await api.post('/arenas', data, {
            headers: {id}
        })
        history.push('/painel');
    }

    return (
        <form onSubmit={handleSubmit}>

            <label 
                id="imagem" 
                style={{ backgroundImage: `url(${preview})`}}
                className={imagem ? 'tem-imagem' : ''}
            >
                <input type="file"  onChange={event => setImagem(event.target.files[0])}/>
                <img src={camera} alt="Selecione uma imagem"/>
            </label>

            <label htmlFor="nome">ARENA *</label>
            <input 
                id="nome"
                placeholder="Nome da sua arena"
                value={nome}
                onChange={ event => setNome(event.target.value)}
            />
            <label htmlFor="endereco">ENDEREÇO * <span>Ex: Av. Universidade, 1305 - Benfica</span></label>
            <input 
                id="endereco"
                placeholder="Insira seu endereço"
                value={endereco}
                onChange={ event => setEndereco(event.target.value)}
            />
            <label htmlFor="telefone">TELEFONE <span>Ex: (XX) XXXX-XXXX</span></label>
            <input 
                id="telefone"
                placeholder="Insira seu telefone"
                value={telefone}
                onChange={ event => setTelefone(event.target.value)}
            />
            <label htmlFor="preco">VALOR DA HORA <span>(em branco para GRATUITO)</span></label>
            <input 
                id="preco"
                placeholder="Valor cobrado por hora"
                value={preco}
                onChange={ event => setPreco(event.target.value)}
            />
            <button type="submit" className="btn">Cadastrar</button>
        </form>
    )
}