const API_URL = 'http://localhost:5000/capivaras';

export const fetchCapivaras = async () => {
    const response = await fetch(API_URL);
    return await response.json();
};

export const addCapivara = async (capivara) => {
    const response = await fetch('http://localhost:5000/capivaras', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(capivara),
    });

    // Verificando o status antes de tentar ler o corpo
    console.log('Response status:', response.status);

    // Só ler o body uma vez
    const responseBody = await response.json();
    console.log('Response body:', responseBody);

    if (!response.ok) {
        throw new Error('Erro na requisição ao servidor');
    }

    return responseBody;  // Retornar o resultado da API
};


export const updateCapivara = async (id, capivara) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(capivara),  // Certifique-se de que o objeto capivara está sendo convertido para JSON
    });

    if (!response.ok) {
        throw new Error('Erro ao atualizar capivara no servidor');
    }

    return await response.json();
};


export const deleteCapivara = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error('Erro ao remover capivara no servidor');
    }

    // Lendo a resposta JSON
    const responseBody = await response.json();
    console.log('Response body:', responseBody);

    return responseBody;
};
