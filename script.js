document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne trimiterea formularului

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Exemplu simplu de validare
    if (username === 'admin' && password === 'password123') {
        alert('Login reușit!');
        // Redirectează utilizatorul la o altă pagină
        window.location.href = 'dashboard.html';
    } else {
        errorMessage.textContent = 'Username sau parola incorecte!';
    }
});
