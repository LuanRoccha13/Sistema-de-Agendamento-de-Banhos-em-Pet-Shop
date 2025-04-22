const conexao = require('./conexao');

exports.criarUsuario = (email, senhaHash, callback) => {
  const sql = 'INSERT INTO usuarios (email, senha) VALUES (?, ?)';
  conexao.query(sql, [email, senhaHash], callback);
};

exports.buscarPorEmail = (email, callback) => {
  const sql = 'SELECT * FROM usuarios WHERE email = ?';
  conexao.query(sql, [email], callback);
};
