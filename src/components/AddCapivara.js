import React, { useState } from 'react';
import { addCapivara } from '../api';
import { TailSpin } from 'react-loader-spinner'; // Pacote de loading spinner

const AddCapivara = ({ onAdd }) => {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [peso, setPeso] = useState('');
    const [statusDeSaude, setStatusDeSaude] = useState('');
    const [habitat, setHabitat] = useState('');
    const [comportamento, setComportamento] = useState('');
    const [dieta, setDieta] = useState('');
    const [observacoes, setObservacoes] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false); // Estado de carregamento
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!nome) newErrors.nome = 'O nome é obrigatório.';
        if (!idade || idade <= 0) newErrors.idade = 'A idade deve ser um número positivo.';
        if (!peso || peso <= 0) newErrors.peso = 'O peso deve ser um número positivo.';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setLoading(true); // Iniciar carregamento
        const newCapivara = { 
            nome, 
            idade, 
            peso, 
            statusDeSaude, 
            habitat, 
            comportamento, 
            dieta, 
            observacoes 
        };
    
        console.log("Enviando capivara:", newCapivara); // <-- Adicione este log
        
        try {
            const result = await addCapivara(newCapivara);
            setMessage('Capivara adicionada com sucesso!');
            onAdd(result);
            resetForm();
        } catch (error) {
            setMessage('Erro ao adicionar capivara.');
            console.error("Erro no frontend ao adicionar capivara:", error); // <-- Adicione este log
        }
        setLoading(false); // Parar carregamento
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
        setErrors({});
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Adicionar Capivara</h2>
            {message && <p>{message}</p>}
            <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
            {errors.nome && <p style={{ color: 'red' }}>{errors.nome}</p>}
            <input type="number" placeholder="Idade" value={idade} onChange={(e) => setIdade(e.target.value)} required />
            {errors.idade && <p style={{ color: 'red' }}>{errors.idade}</p>}
            <input type="number" placeholder="Peso" value={peso} onChange={(e) => setPeso(e.target.value)} required />
            {errors.peso && <p style={{ color: 'red' }}>{errors.peso}</p>}
            <input type="text" placeholder="Status de Saúde" value={statusDeSaude} onChange={(e) => setStatusDeSaude(e.target.value)} required />
            <input type="text" placeholder="Habitat" value={habitat} onChange={(e) => setHabitat(e.target.value)} required />
            <input type="text" placeholder="Comportamento" value={comportamento} onChange={(e) => setComportamento(e.target.value)} required />
            <input type="text" placeholder="Dieta" value={dieta} onChange={(e) => setDieta(e.target.value)} required />
            <input type="text" placeholder="Observações" value={observacoes} onChange={(e) => setObservacoes(e.target.value)} />
            <button type="submit" disabled={loading}>Adicionar</button>
            {loading && <TailSpin height="50" width="50" color="blue" ariaLabel="loading" />}
        </form>
    );
};

export default AddCapivara;
