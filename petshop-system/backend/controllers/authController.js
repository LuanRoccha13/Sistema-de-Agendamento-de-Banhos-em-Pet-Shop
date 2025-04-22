const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const usuarioModel = require('../models/usuarioModel');
require('dotenv').config();

exports.registrar = (req, res) => {
  const { email, senha } = req.body;
  bcrypt.hash(senha, 10, (err, hash) => {
    if (err) return res.status(500).json({ erro: err });

    usuarioModel.criarUsuario(email, hash, (erro, resultado) => {
      if (erro) return res.status(500).json({ erro: erro });
      res.status(201).json({ mensagem: 'Usuário criado!' });
    });
  });
};

exports.login = (req, res) => {
  const { email, senha } = req.body;
  usuarioModel.buscarPorEmail(email, (erro, resultados) => {
    if (erro || resultados.length === 0) return res.status(401).json({ mensagem: 'Usuário não encontrado' });

    const usuario = resultados[0];
    bcrypt.compare(senha, usuario.senha, (err, igual) => {
      if (!igual) return res.status(401).json({ mensagem: 'Senha incorreta' });

      const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    });
  });
};
