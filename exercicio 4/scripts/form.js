document.getElementById('form').addEventListener('submit', (event) => {

    const email = document.getElementById('emailLogin').value;
    if (!email) {
        alert('Por favor, digite algo para adicionar na lista');
        event.preventDefault();
    }

});