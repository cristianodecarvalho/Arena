import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

export default function Dashboard(){

    const [ arenas, setArenas ] = useState([]);

    useEffect(() => {
        async function loadArenas(){
            const id = localStorage.getItem('usuario');
            const response = await api.get('/arenas',{
                headers: {id}
            });
            setArenas(response.data);
        }
        loadArenas();
    }, []);

    return(
        <>
            <ul className={arenas.length > 0 ? "arena-list" : "empty"}>
                {arenas.length > 0 ? 
                arenas.map( (arena, index) => (
                    <li key={index}>
                        <header style={{ backgroundImage: `url(${arena.imagem_url})` }}/>
                        <strong>{arena.arena}</strong>
                        <span>{arena.endereco? arena.endereco : 'Endereço não informado'}</span>
                        <span>{arena.telefone? arena.telefone : 'Telefone não informado'}</span>
                        <span>{arena.preco ? `R$${arena.preco}/hora` : 'GRATUITO'}</span>
                    </li>
                )) : 
                    <p className="emptyItem">
                        <strong>No momento não temos arenas disponíveis</strong>
                        <span>Que tal cadastrar uma nova arena, hein?</span>
                    </p>
                }
            </ul>

            <Link to="/novo">
                <button className="btn">Cadastrar nova arena</button>
            </Link>
        </>
    )
}