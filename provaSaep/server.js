const express = require('express');
const bodyParser = require('body-parser');
const tarefasRouter = require('./routes/tarefasback');  // Importa o arquivo de rotas do backend para tarefas

const app = express();
const port = 3000;

// Middleware para analisar o corpo da requisição como JSON
app.use(bodyParser.json());

// Usar as rotas definidas no tarefasback.js
app.use('/api', tarefasRouter);

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
