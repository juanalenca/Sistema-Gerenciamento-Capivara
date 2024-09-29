import React, { useEffect, useState } from "react";
import { fetchCapivaras, deleteCapivara } from "../api";

const CapivaraList = ({ onEdit, refresh }) => {
  const [capivaras, setCapivaras] = useState([]);
  const [message, setMessage] = useState(""); // Para mostrar mensagens

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
      setCapivaras(capivaras.filter((capivara) => capivara.id !== id)); // Atualizar a lista localmente
      setMessage("Capivara removida com sucesso!");
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      setMessage("Erro ao remover capivara.");
      console.error("Erro ao remover capivara:", error);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Lista de Capivaras</h2>
      {message && <p className="text-green-500 mb-4">{message}</p>}
      <ul className="space-y-4">
        {capivaras.map((capivara) => (
          <li
            key={capivara.id}
            className="flex justify-between items-center bg-gray-100 rounded p-4 shadow-md"
          >
            <div>
              <span className="font-bold">{capivara.nome}</span> -{" "}
              {capivara.idade} anos
            </div>
            <div>
              <button
                onClick={() => onEdit(capivara)}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Editar
              </button>

              <button
                onClick={() => handleDelete(capivara.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
              >
                Remover
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CapivaraList;
