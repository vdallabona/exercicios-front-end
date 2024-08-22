document.getElementById('form').addEventListener('submit', (event) => {
    const email = document.getElementById('emailLogin').value;
    const senha = document.getElementById('passwordLogin').value;
    if (!email) {
        alert('Por favor, preencha o campo email');
        event.preventDefault();
    }
    if (!senha) {
        alert('Por favor, preencha o campo senha');
        event.preventDefault();
    }
});