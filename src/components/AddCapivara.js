import React, { useState } from 'react';
import { addCapivara } from '../api';

const AddCapivara = ({ onAdd }) => {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [peso, setPeso] = useState('');
    const [statusDeSaude, setStatusDeSaude] = useState('');
    const [habitat, setHabitat] = useState('');
    const [comportamento, setComportamento] = useState('');
    const [dieta, setDieta] = useState('');
    const [observacoes, setObservacoes] = useState('');
    const [message, setMessage] = useState(''); // Para exibir a mensagem de sucesso ou erro

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newCapivara = { nome, idade, peso, status_de_saude: statusDeSaude, habitat, comportamento, dieta, observacoes };
        try {
            const result = await addCapivara(newCapivara);
            setMessage('Capivara adicionada com sucesso!');
            onAdd(result);
            resetForm();
        } catch (error) {
            setMessage('Erro ao adicionar capivara.');
        }
    };

    const resetForm = () => {
        setNome('');
        setIdade('');
        setPeso('');
        setStatusDeSaude('');
        setHabitat('');
        setComportamento('');
        setDieta('');
        setObservacoes('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Adicionar Capivara</h2>
            {message && <p>{message}</p>} {/* Exibe a mensagem */}
            <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
            <input type="number" placeholder="Idade" value={idade} onChange={(e) => setIdade(e.target.value)} required />
            <input type="number" placeholder="Peso" value={peso} onChange={(e) => setPeso(e.target.value)} required />
            <input type="text" placeholder="Status de Saúde" value={statusDeSaude} onChange={(e) => setStatusDeSaude(e.target.value)} required />
            <input type="text" placeholder="Habitat" value={habitat} onChange={(e) => setHabitat(e.target.value)} required />
            <input type="text" placeholder="Comportamento" value={comportamento} onChange={(e) => setComportamento(e.target.value)} required />
            <input type="text" placeholder="Dieta" value={dieta} onChange={(e) => setDieta(e.target.value)} required />
            <input type="text" placeholder="Observações" value={observacoes} onChange={(e) => setObservacoes(e.target.value)} />
            <button type="submit">Adicionar</button>
        </form>
    );
};

export default AddCapivara;
