const express = require('express');
const router = express.Router();
const multer = require('multer');
const agendamentoController = require('../controllers/agendamentoController');
const autenticar = require('../middlewares/authMiddleware');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'petshop-system/back-end/uploads'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

const upload = multer({ storage });

router.post('/', autenticar, upload.single('imagem'), agendamentoController.criar);
router.get('/', autenticar, agendamentoController.listar);
router.put('/:id', autenticar, upload.single('imagem'), agendamentoController.atualizar);
router.delete('/:id', autenticar, agendamentoController.deletar);

module.exports = router;
