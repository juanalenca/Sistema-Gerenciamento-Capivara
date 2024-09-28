import React, { useEffect, useState } from 'react';
import { fetchCapivaras, deleteCapivara } from '../api';

const CapivaraList = ({ onEdit, refresh }) => {
    const [capivaras, setCapivaras] = useState([]);
    const [message, setMessage] = useState(''); // Para mostrar mensagens

    useEffect(() => {
        const loadCapivaras = async () => {
            const data = await fetchCapivaras();
            setCapivaras(data);
        };
        loadCapivaras();
    }, [refresh]);

    const handleDelete = async (id) => {
        try {
            await deleteCapivara(id);
            setCapivaras(capivaras.filter((capivara) => capivara.id !== id));  // Atualizar a lista localmente
            setMessage('Capivara removida com sucesso!');
        } catch (error) {
            setMessage('Erro ao remover capivara.');
            console.error("Erro ao remover capivara:", error);
        }
    };    

    return (
        <div>
            <h2>Lista de Capivaras</h2>
            {message && <p>{message}</p>}
            <ul>
                {capivaras.map((capivara) => (
                    <li key={capivara.id}>
                        {capivara.nome} - {capivara.idade} anos
                        <button onClick={() => onEdit(capivara)}>Editar</button>
                        <button onClick={() => handleDelete(capivara.id)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CapivaraList;
