import React, { useState, useEffect } from 'react';
import { updateCapivara } from '../api';

const EditCapivara = ({ capivara, onUpdate, onCancel }) => {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [peso, setPeso] = useState('');
    const [statusDeSaude, setStatusDeSaude] = useState('');
    const [habitat, setHabitat] = useState('');
    const [comportamento, setComportamento] = useState('');
    const [dieta, setDieta] = useState('');
    const [observacoes, setObservacoes] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (capivara) {
            setNome(capivara.nome);
            setIdade(capivara.idade);
            setPeso(capivara.peso);
            setStatusDeSaude(capivara.status_de_saude);
            setHabitat(capivara.habitat);
            setComportamento(capivara.comportamento);
            setDieta(capivara.dieta);
            setObservacoes(capivara.observacoes);
        }
    }, [capivara]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateCapivara(capivara.id, { nome, idade, peso, status_de_saude: statusDeSaude, habitat, comportamento, dieta, observacoes });
            setMessage('Capivara atualizada com sucesso!');
            onUpdate();
        } catch (error) {
            setMessage('Erro ao atualizar capivara.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Editar Capivara</h2>
            {message && <p>{message}</p>}
            <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
            <input type="number" placeholder="Idade" value={idade} onChange={(e) => setIdade(e.target.value)} required />
            <input type="number" placeholder="Peso" value={peso} onChange={(e) => setPeso(e.target.value)} required />
            <input type="text" placeholder="Status de Saúde" value={statusDeSaude} onChange={(e) => setStatusDeSaude(e.target.value)} required />
            <input type="text" placeholder="Habitat" value={habitat} onChange={(e) => setHabitat(e.target.value)} required />
            <input type="text" placeholder="Comportamento" value={comportamento} onChange={(e) => setComportamento(e.target.value)} required />
            <input type="text" placeholder="Dieta" value={dieta} onChange={(e) => setDieta(e.target.value)} required />
            <input type="text" placeholder="Observações" value={observacoes} onChange={(e) => setObservacoes(e.target.value)} />
            <button type="submit">Atualizar</button>
            <button type="button" onClick={onCancel}>Cancelar</button>
        </form>
    );
};

export default EditCapivara;
