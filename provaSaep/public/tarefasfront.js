// Função para carregar as tarefas da API e exibi-las na tela
async function loadTasks() {
    try {
        const response = await fetch('http://localhost:3000/api/tarefas');  // Chama a API para pegar todas as tarefas
        const tasks = await response.json();  // Converte a resposta em JSON
        const taskList = document.getElementById('taskList');  // Encontra a lista de tarefas na tela
        taskList.innerHTML = '';  // Limpa a lista de tarefas antes de adicionar as novas

        tasks.forEach(task => {
            // Cria um item da lista para cada tarefa e adiciona na tela
            const li = document.createElement('li');
            li.textContent = `Descrição: ${task.descricao} | Setor: ${task.nome_setor} | Prioridade: ${task.prioridade} | Status: ${task.status}`;
            taskList.appendChild(li);  // Adiciona o item na lista
        });
    } catch (err) {
        console.error('Erro ao carregar as tarefas:', err);  // Caso haja erro ao carregar as tarefas
    }
}

// Adicionar evento de submit no formulário para cadastrar uma nova tarefa
document.getElementById('taskForm').addEventListener('submit', async (e) => {
    e.preventDefault();  // Impede o envio do formulário para não recarregar a página

    // Captura os valores do formulário
    const descricao = document.getElementById('descricao').value;
    const nome_setor = document.getElementById('nome_setor').value;
    const prioridade = document.getElementById('prioridade').value;
    const status = document.getElementById('status').value;

    try {
        // Faz a requisição POST para cadastrar a tarefa
        const response = await fetch('http://localhost:3000/api/tarefas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',  // Envia o corpo como JSON
            },
            body: JSON.stringify({ descricao, nome_setor, prioridade, status }),  // Envia os dados da tarefa
        });

        // Verifica se a resposta foi bem-sucedida
        if (response.ok) {
            alert('Tarefa cadastrada com sucesso!');  // Alerta de sucesso
            document.getElementById('taskForm').reset();  // Limpa o formulário
            loadTasks();  // Recarrega a lista de tarefas
        } else {
            const error = await response.json();
            alert(`Erro: ${error.message}`);  // Exibe mensagem de erro
        }
    } catch (err) {
        alert('Erro ao cadastrar tarefa. Tente novamente.');  // Exibe erro caso algo dê errado
        console.error(err);  // Mostra erro no console
    }
});

// Carregar as tarefas automaticamente quando a página for carregada
window.onload = loadTasks;  // Chama a função de carregar as tarefas quando a página for aberta
