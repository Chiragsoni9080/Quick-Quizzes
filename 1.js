document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent form submission

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "admin" && password === "password123") {
        alert("Login successful!");
        // You can redirect the user or handle the login success here
        // window.location.href = 'dashboard.html'; // Example
    } else {
        document.getElementById('error-message').textContent = "Invalid username or password";
    }
});
