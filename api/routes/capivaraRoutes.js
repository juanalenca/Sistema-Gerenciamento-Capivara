const express = require('express');
const router = express.Router();
const {
    listarCapivaras,
    adicionarCapivara,
    atualizarCapivara,
    removerCapivara,
} = require('../controllers/capivaraController');

// Definindo as rotas
router.get('/', listarCapivaras);
router.post('/', adicionarCapivara);
router.put('/:id', atualizarCapivara);
router.delete('/:id', removerCapivara);

module.exports = router;