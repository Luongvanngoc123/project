document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorElement = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === 'root' && password === 'root') {
            window.location.href = 'hello.html';
        } else if (username === 'kkk' && password === 'kkk') {
            window.location.href = 'hello-world.html';
        } else {
            errorElement.textContent = 'Incorrect username or password';
            errorElement.classList.remove('hidden');
        }
    });
});
