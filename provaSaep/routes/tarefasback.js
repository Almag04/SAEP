const express = require('express');
const router = express.Router();
const db = require('./db'); // Certifique-se de que você tenha a configuração de banco de dados no 'db.js'

// Rota para obter todas as tarefas
router.get('/tarefas', async (req, res) => {
    try {
        const [tasks] = await db.query('SELECT * FROM tarefas');  // Retorna todas as tarefas
        res.json(tasks);  // Envia as tarefas como resposta
    } catch (err) {
        console.error('Erro ao buscar tarefas:', err);
        res.status(500).json({ message: 'Erro ao buscar tarefas.' });
    }
});

// Rota para criar uma nova tarefa
router.post('/tarefas', async (req, res) => {
    const { descricao, nome_setor, prioridade, status } = req.body;
    try {
        // Insere a tarefa no banco de dados
        const result = await db.query('INSERT INTO tarefas (descricao, nome_setor, prioridade, status) VALUES (?, ?, ?, ?)', 
        [descricao, nome_setor, prioridade, status]);

        // Retorna a tarefa criada
        res.status(201).json({ id_tarefa: result.insertId, descricao, nome_setor, prioridade, status });
    } catch (err) {
        console.error('Erro ao cadastrar tarefa:', err);
        res.status(500).json({ message: 'Erro ao cadastrar tarefa.' });
    }
});

module.exports = router;
