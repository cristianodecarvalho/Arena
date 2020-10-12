import React, {useState} from 'react'
import api from '../../services/api'
import './styles.css'


export default function Login({ history }){

    const [ email, setEmail ] = useState('');

    async function handleSubmit(event){
        event.preventDefault();
        const response = await api.post('/sessoes',{ email });

        console.log(response.data)
        const { id } = response.data;
        localStorage.setItem('usuario', id);
        history.push('/painel')
    }

    return (
        <>
            <p>Cadastre suas <strong>arenas</strong> para jogadores se divertirem com seus amigos</p>
            <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-MAIL *</label>
            <input 
                id="email" 
                type="email" 
                placeholder="Insira seu e-mail"
                value={email}
                onChange={ event => setEmail(event.target.value)}
            />
            <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    )
}