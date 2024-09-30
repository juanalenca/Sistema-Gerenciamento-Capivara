import React, { useState } from 'react';
import CapivaraList from './components/CapivaraList';
import AddCapivara from './components/AddCapivara';
import EditCapivara from './components/EditCapivara';

const App = () => {
    const [selectedCapivara, setSelectedCapivara] = useState(null);
    const [refresh, setRefresh] = useState(false);

    const handleEdit = (capivara) => {
        setSelectedCapivara(capivara);
    };

    const handleUpdate = () => {
        setSelectedCapivara(null);
        setRefresh(!refresh);
    };

    return (
        <div className="bg-black text-white min-h-screen">
            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold text-center text-white mb-6">Gerenciamento de Capivaras</h1>
                {selectedCapivara ? (
                    <EditCapivara capivara={selectedCapivara} onUpdate={handleUpdate} onCancel={() => setSelectedCapivara(null)} />
                ) : (
                    <AddCapivara onAdd={handleUpdate} />
                )}
                <CapivaraList onEdit={handleEdit} refresh={refresh} />
            </div>
        </div>
    );
};

export default App;
