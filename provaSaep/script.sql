CREATE DATABASE gerenciadorTarefas;

USE gerenciadorTarefas;

CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
    senha VARCHAR(100) UNIQUE NOT NULL

);

CREATE TABLE tarefas (
    id_taerefa INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    descricao TEXT NOT NULL,
    nome_setor VARCHAR(100) NOT NULL,
    prioridade ENUM('Baixa', 'Média', 'Alta') NOT NULL,
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
    status ENUM('Pendente', 'Em andamento', 'Concluída') NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

INSERT INTO usuarios (nome, email, senha)
VALUES ('Jorge ', 'jorge.pafuncio@gmail.com', 'jorge123'),
VALUES ('miguel ', 'miguel.ribeiro@gmail.com', 'miguel123');
VALUES ('Roberta ', 'Roberta.siqueira@gmail.com', 'roberta123');