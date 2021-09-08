import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import '../styles/auth.scss';

import Button from '../components/Button'
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase'

export function NewRoom() {
    const [newRoom, setNewRoom] = useState('');
    
    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();

        if (newRoom.trim() === '') {
            return;
        }

        const roomRef = database.ref('rooms');
    }

    const { user } = useAuth()
    
    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração Lateral" />
                <strong>Toda pergunta tem uma resposta.</strong>
                <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input type="text" placeholder="Nome da Sala" 
                        onChange={event => setNewRoom(event.target.value)}
                        value={newRoom}/>
                        
                        <Button type="submit">Criar Sala</Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
                </div>
            </main>
        </div>
    )
}