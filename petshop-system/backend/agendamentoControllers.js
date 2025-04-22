const agendamentoModel = require('../models/agendamentoModel');

exports.criar = (req, res) => {
  const imagem = req.file?.filename;
  const agendamento = {
    ...req.body,
    imagem,
    usuario_id: req.usuarioId
  };
  agendamentoModel.criar(agendamento, (err) => {
    if (err) return res.status(500).json({ erro: err });
    res.status(201).json({ mensagem: 'Agendamento criado!' });
  });
};

exports.listar = (req, res) => {
  agendamentoModel.listar(req.usuarioId, (err, resultados) => {
    if (err) return res.status(500).json({ erro: err });
    res.json(resultados);
  });
};

exports.atualizar = (req, res) => {
  const id = req.params.id;
  const imagem = req.file?.filename || req.body.imagem;
  const agendamento = {
    ...req.body,
    imagem,
    usuario_id: req.usuarioId
  };
  agendamentoModel.atualizar(id, agendamento, (err) => {
    if (err) return res.status(500).json({ erro: err });
    res.json({ mensagem: 'Agendamento atualizado!' });
  });
};

exports.deletar = (req, res) => {
  const id = req.params.id;
  agendamentoModel.deletar(id, req.usuarioId, (err) => {
    if (err) return res.status(500).json({ erro: err });
    res.json({ mensagem: 'Agendamento excluído!' });
  });
};
