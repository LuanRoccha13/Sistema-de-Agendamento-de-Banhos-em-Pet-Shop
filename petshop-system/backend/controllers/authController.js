const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models/conexao');

exports.registrar = async (req, res) => {
  const { email, senha } = req.body;
  try {
    const hash = await bcrypt.hash(senha, 10);
    await db.query('INSERT INTO usuarios (email, senha) VALUES (?, ?)', [email, hash]);
    res.status(201).json({ mensagem: 'Usuário registrado com sucesso!' });
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao registrar usuário', erro: err });
  }
};

exports.login = async (req, res) => {
  const { email, senha } = req.body;
  try {
    const [rows] = await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);
    const usuario = rows[0];
    if (!usuario) return res.status(400).json({ mensagem: 'Usuário não encontrado' });
    const match = await bcrypt.compare(senha, usuario.senha);
    if (!match) return res.status(401).json({ mensagem: 'Senha incorreta' });
    const token = jwt.sign({ id: usuario.id }, process.env.SECRET);
    res.json({ mensagem: 'Login realizado com sucesso', token });
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro no login', erro: err });
  }
};