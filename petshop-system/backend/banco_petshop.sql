CREATE DATABASE IF NOT EXISTS petshop;
USE petshop;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL
);

CREATE TABLE agendamentos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome_pet VARCHAR(100),
  raca VARCHAR(100),
  data DATE,
  horario TIME,
  observacoes TEXT,
  imagem VARCHAR(255),
  usuario_id INT,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);
