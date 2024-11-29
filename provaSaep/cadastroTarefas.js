document.getElementById('taskForm').addEventListener('submit', async (e) => {
    e.preventDefault();  
    const descricao = document.getElementById('descricao').value;
    const nome_setor = document.getElementById('nome_setor').value;
    const prioridade = document.getElementById('prioridade').value;
    const status = document.getElementById('status').value;

    try {
        const response = await fetch('http://localhost:3000/api/tarefas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',  
            },
            body: JSON.stringify({ descricao, nome_setor, prioridade, status }), 
        });

        if (response.ok) {
            alert('Tarefa cadastrada com sucesso!'); 
            document.getElementById('taskForm').reset();  
        } else {
            const error = await response.json();
            alert(`Erro: ${error.message}`);  
        }
    } catch (err) {
        alert('Erro ao cadastrar tarefa. Tente novamente.');  
        console.error(err); 
    }
});
