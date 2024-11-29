document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome, email, senha }), 
        });

        const data = await response.json();

        if (response.ok) {
            alert('Login bem-sucedido!');
            window.location.href = 'tarefas.html'; 
        } else {
            alert(data.message || 'Erro ao realizar login');
        }
    } catch (error) {
        console.error('Erro ao tentar fazer login:', error);
        alert('Erro ao tentar fazer login. Tente novamente.');
    }
});
