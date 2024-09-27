document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('signupForm').classList.add('hidden');
    document.getElementById('forgotForm').classList.add('hidden');
    this.classList.add('active');
    document.getElementById('signupBtn').classList.remove('active');
});

document.getElementById('signupBtn').addEventListener('click', function() {
    document.getElementById('signupForm').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('forgotForm').classList.add('hidden');
    this.classList.add('active');
    document.getElementById('loginBtn').classList.remove('active');
});

document.getElementById('forgotPassword').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('forgotForm').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('signupForm').classList.add('hidden');
    document.getElementById('loginBtn').classList.remove('active');
    document.getElementById('signupBtn').classList.remove('active');
});

document.getElementById('themeButton').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = 'Switch to Light Mode';
    } else {
        this.textContent = 'Switch to Dark Mode';
    }
});

function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example credentials check
    const validUsername = "user";
    const validPassword = "password123";

    if (username === validUsername && password === validPassword) {
        window.location.href = "dashboard.html";
        return false; // Prevent form submission
    } else {
        alert("Invalid username or password");
        return false; // Prevent form submission
    }
}