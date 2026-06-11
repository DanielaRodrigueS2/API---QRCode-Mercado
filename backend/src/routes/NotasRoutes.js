const express = require('express');
const router = express.Router();
const NotaController = require('../controllers/notaFiscalController');
const Auth = require('../middlewares/auth');

router.post('/gerarNota', Auth, NotaController.gerarNotaFiscal);
router.get('/retornaNotas', Auth, NotaController.getAllNotas);
router.put('/exlcuiNota', Auth, NotaController.deleteNotaById);

module.exports = router;