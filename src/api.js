const API_URL = 'http://localhost:5000/capivaras';

export const fetchCapivaras = async () => {
    const response = await fetch(API_URL);
    return await response.json();
};

export const addCapivara = async (capivara) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(capivara),
    });
    return await response.json();
};

export const updateCapivara = async (id, capivara) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(capivara),
    });
    return await response.json();
};

export const deleteCapivara = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    return await response.json();
};