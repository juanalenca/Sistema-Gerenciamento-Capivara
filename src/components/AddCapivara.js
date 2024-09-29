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
    
        // Checagem de valores antes de enviar
        console.log("Nome:", nome);
        console.log("Idade:", idade);
        console.log("Peso:", peso);
        console.log("Status de Saúde:", statusDeSaude);
    
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
            statusDeSaude,  // Verifique este valor
            habitat,
            comportamento,
            dieta,
            observacoes
        };
    
        console.log("Enviando capivara:", newCapivara); // <-- Log para verificar o que está sendo enviado
    
        try {
            const result = await addCapivara(newCapivara);
            setMessage('Capivara adicionada com sucesso!');
            onAdd(result);
            resetForm();
            setTimeout(() => setMessage(''), 3000); // Esconde a mensagem após 3 segundos
        } catch (error) {
            setMessage('Erro ao adicionar capivara.');
            console.error("Erro no frontend ao adicionar capivara:", error); // <-- Log do erro
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

            <h2 className="text-2xl font-bold text-gray-700 mb-4">Adicionar Capivara</h2>
            {message && <p className="text-green-500">{message}</p>}
            <div className="mb-4">
                <input className="border rounded w-full py-2 px-3 text-gray-700" type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
                {errors.nome && <p className="text-red-500 text-sm">{errors.nome}</p>}
            </div>

            <div className="mb-4">
                <input className="border rounded w-full py-2 px-3 text-gray-700" type="number" placeholder="Idade" value={idade} onChange={(e) => setIdade(e.target.value)} required />
                {errors.idade && <p className="text-red-500 text-sm">{errors.idade}</p>}
            </div>

            <div className="mb-4">
                <input className="border rounded w-full py-2 px-3 text-gray-700" type="number" placeholder="Peso" value={peso} onChange={(e) => setPeso(e.target.value)} required />
                {errors.peso && <p className="text-red-500 text-sm">{errors.peso}</p>}
            </div>

            {errors.peso && <p style={{ color: 'red' }}>{errors.peso}</p>}

            <div className="mb-4">
                <input className="border rounded w-full py-2 px-3 text-gray-700" type="text" placeholder="Status de Saúde" value={statusDeSaude} onChange={(e) => setStatusDeSaude(e.target.value)} required />
            </div>

            <div className="mb-4">
                <input className="border rounded w-full py-2 px-3 text-gray-700" type="text" placeholder="Habitat" value={habitat} onChange={(e) => setHabitat(e.target.value)} required />
            </div>
            
            <div className="mb-4">
                <input className="border rounded w-full py-2 px-3 text-gray-700" type="text" placeholder="Comportamento" value={comportamento} onChange={(e) => setComportamento(e.target.value)} required />
            </div>
            
            <div className="mb-4">
                <input className="border rounded w-full py-2 px-3 text-gray-700" type="text" placeholder="Dieta" value={dieta} onChange={(e) => setDieta(e.target.value)} required />
            </div>

            <div className="mb-4">
                <input className="border rounded w-full py-2 px-3 text-gray-700" type="text" placeholder="Observações" value={observacoes} onChange={(e) => setObservacoes(e.target.value)} />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
            >
                {loading ? 'Adicionando...' : 'Adicionar'}
            </button>
            
            {loading && <TailSpin height="50" width="50" color="blue" ariaLabel="loading" />}

        </form>
    );
};

export default AddCapivara;