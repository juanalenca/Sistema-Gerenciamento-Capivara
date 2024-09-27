import React, { useState } from 'react';
import CapivaraList from './componentes/CapivaraList';
import AddCapivara from './componentes/AddCapivara';
import EditCapivara from './componentes/EditCapivara';

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
        <div>
            <h1>Gerenciamento de Capivaras</h1>
            {selectedCapivara ? (
                <EditCapivara capivara={selectedCapivara} onUpdate={handleUpdate} onCancel={() => setSelectedCapivara(null)} />
            ) : (
                <AddCapivara onAdd={handleUpdate} />
            )}
            <CapivaraList onEdit={handleEdit} refresh={refresh} />
        </div>
    );
};

export default App;
