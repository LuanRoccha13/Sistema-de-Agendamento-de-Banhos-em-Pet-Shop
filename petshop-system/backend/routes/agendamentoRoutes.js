const express = require('express');
const router = express.Router();
const agendamentoController = require('../controllers/agendamentoController');
const authMiddleware = require('../middlewares/authMiddleware');
const multer = require('multer');

const path = require('path');
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, '../uploads')),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});


const upload = multer({ storage });

router.post('/', authMiddleware, upload.single('imagem'), agendamentoController.criarAgendamento);
router.get('/', authMiddleware, agendamentoController.listarAgendamentos);

module.exports = router;