const db = require('../models/conexao');

exports.criarAgendamento = async (req, res) => {
  const { nome_pet, raca, data, horario, observacoes } = req.body;
  const imagem = req.file ? req.file.filename : null;
  const usuario_id = req.usuario.id;
  try {
    await db.query('INSERT INTO agendamentos (nome_pet, raca, data, horario, observacoes, imagem, usuario_id) VALUES (?, ?, ?, ?, ?, ?, ?)', 
    [nome_pet, raca, data, horario, observacoes, imagem, usuario_id]);
    res.status(201).json({ mensagem: 'Agendamento criado com sucesso!' });
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao criar agendamento', erro: err });
  }
};

exports.listarAgendamentos = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM agendamentos WHERE usuario_id = ?', [req.usuario.id]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar agendamentos', erro: err });
  }
};