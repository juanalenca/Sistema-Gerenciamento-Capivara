const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar no banco de dados:', err);
        return;
    }
    console.log('Conectado ao MySQL');
});

// Função para listar capivaras
const listarCapivaras = (req, res) => {
    db.query('SELECT * FROM capivaras', (err, results) => {
        if (err) {
            console.error('Erro ao listar capivaras:', err);
            res.status(500).send('Erro no servidor');
        } else {
            res.json(results);
        }
    });
};

// Função para adicionar uma capivara
const adicionarCapivara = (req, res) => {
    const { nome, idade, peso, status_de_saude, habitat, comportamento, dieta, observacoes } = req.body;

    // Validação básica dos campos obrigatórios
    if (!nome || !idade || !peso) {
        return res.status(400).send('Nome, idade e peso são obrigatórios.');
    }

    const sql = 'INSERT INTO capivaras (nome, idade, peso, status_de_saude, habitat, comportamento, dieta, observacoes) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [nome, idade, peso, status_de_saude, habitat, comportamento, dieta, observacoes];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Erro ao adicionar capivara:', err);
            res.status(500).send('Erro no servidor');
        } else {
            res.status(201).json({ id: result.insertId, ...req.body });
        }
    });
};

// Função para atualizar uma capivara
const atualizarCapivara = (req, res) => {
    const { id } = req.params;
    const { nome, idade, peso, status_de_saude, habitat, comportamento, dieta, observacoes } = req.body;

    const sql = 'UPDATE capivaras SET nome = ?, idade = ?, peso = ?, status_de_saude = ?, habitat = ?, comportamento = ?, dieta = ?, observacoes = ? WHERE id = ?';
    const values = [nome, idade, peso, status_de_saude, habitat, comportamento, dieta, observacoes, id];

    db.query(sql, values, (err) => {
        if (err) {
            console.error('Erro ao atualizar capivara:', err);
            res.status(500).send('Erro no servidor');
        } else {
            res.status(200).json({ id, ...req.body });
        }
    });
};

// Função para remover uma capivara
const removerCapivara = (req, res) => {
    const { id } = req.params;

    db.query('DELETE FROM capivaras WHERE id = ?', [id], (err) => {
        if (err) {
            console.error('Erro ao remover capivara:', err);
            res.status(500).send('Erro no servidor');
        } else {
            res.status(200).json({ message: 'Capivara removida com sucesso!' });  // Retornar JSON válido
        }
    });
};

module.exports = {
    listarCapivaras,
    adicionarCapivara,
    atualizarCapivara,
    removerCapivara,
};
