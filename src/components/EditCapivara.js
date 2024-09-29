import React, { useState, useEffect } from 'react';
import { updateCapivara } from '../api';
import { TailSpin } from 'react-loader-spinner';

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
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (capivara) {
            console.log("Dados da capivara recebidos para edição:", capivara);
            setNome(capivara.nome || '');
            setIdade(capivara.idade || '');
            setPeso(capivara.peso || '');
            setStatusDeSaude(capivara.status_de_saude || '');  // Alterado para status_de_saude
            setHabitat(capivara.habitat || '');
            setComportamento(capivara.comportamento || '');
            setDieta(capivara.dieta || '');
            setObservacoes(capivara.observacoes || '');
        }
    }, [capivara]);

    const validateForm = () => {
        const newErrors = {};
        if (!nome) newErrors.nome = 'O nome é obrigatório.';
        if (!idade || idade <= 0) newErrors.idade = 'A idade deve ser um número positivo.';
        if (!peso || peso <= 0) newErrors.peso = 'O peso deve ser um número positivo.';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Enviando capivara para atualização:", {
            nome,
            idade,
            peso,
            status_de_saude: statusDeSaude,  // Certifique-se de enviar statusDeSaude como status_de_saude
            habitat,
            comportamento,
            dieta,
            observacoes
        });

        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setLoading(true);

        try {
            await updateCapivara(capivara.id, {
                nome,
                idade,
                peso,
                status_de_saude: statusDeSaude, // Certifique-se de enviar statusDeSaude como status_de_saude
                habitat,
                comportamento,
                dieta,
                observacoes
            });
            setMessage('Capivara atualizada com sucesso!');
            onUpdate();
        } catch (error) {
            setMessage('Erro ao atualizar capivara.');
            console.error("Erro ao atualizar capivara:", error);
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Editar Capivara</h2>
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
            <button type="submit" disabled={loading}>Atualizar</button>
            <button type="button" onClick={onCancel}>Cancelar</button>
            {loading && <TailSpin height="50" width="50" color="blue" ariaLabel="loading" />}
        </form>
    );
};

export default EditCapivara;
