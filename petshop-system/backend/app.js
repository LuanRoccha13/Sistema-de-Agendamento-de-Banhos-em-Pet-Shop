// === backend/app.js ===
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth');
const appointmentRoutes = require('./routes/appointments');
const path = require('path');

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/auth', authRoutes);
app.use('/api/appointments', appointmentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

// === backend/database.js ===
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao MySQL!');
});

module.exports = db;

// === backend/.env (exemplo) ===
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=banco_petshop
JWT_SECRET=segredo_super_secreto

// === backend/models/User.js ===
const db = require('../database');
const bcrypt = require('bcrypt');

const User = {
  register: async (email, senha, callback) => {
    const hash = await bcrypt.hash(senha, 10);
    db.query('INSERT INTO usuarios (email, senha) VALUES (?, ?)', [email, hash], callback);
  },
  login: (email, callback) => {
    db.query('SELECT * FROM usuarios WHERE email = ?', [email], callback);
  }
};

module.exports = User;

// === backend/models/Pet.js ===
const db = require('../database');

const Pet = {
  agendar: (pet, callback) => {
    const { nome, raca, data, horario, observacoes, imagem, user_id } = pet;
    db.query(
      'SELECT * FROM agendamentos WHERE data = ? AND horario = ?',
      [data, horario],
      (err, results) => {
        if (results.length > 0) {
          return callback({ code: 'ER_DUPLICATE_TIME' });
        }
        db.query(
          'INSERT INTO agendamentos (nome, raca, data, horario, observacoes, imagem, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [nome, raca, data, horario, observacoes, imagem, user_id],
          callback
        );
      }
    );
  },
  listar: (userId, callback) => {
    db.query('SELECT * FROM agendamentos WHERE user_id = ?', [userId], callback);
  },
  contar: (callback) => {
    db.query('SELECT COUNT(*) AS total FROM agendamentos', callback);
  }
};

module.exports = Pet;

// === backend/routes/auth.js ===

// === backend/routes/appointments.js ===

// === backend/middleware/authMiddleware.js ===

// === banco_petshop.sql ===
-- Criação do banco
CREATE DATABASE IF NOT EXISTS banco_petshop;
USE banco_petshop;

-- Tabela de usuários
CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL
);

-- Tabela de agendamentos
CREATE TABLE IF NOT EXISTS agendamentos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  raca VARCHAR(100),
  data DATE,
  horario TIME,
  observacoes TEXT,
  imagem VARCHAR(255),
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES usuarios(id)
);
