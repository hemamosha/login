document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const loginMessage = document.getElementById("loginMessage");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Retrieve the stored password for the entered username
        const storedPassword = localStorage.getItem(username);

        if (storedPassword === password) {
            // Redirect to the success page upon successful login
            window.location.href = "success.html";
        } else {
            // Display an error message for incorrect login
            loginMessage.textContent = "Invalid username or password. Please try again.";
        }
    });
});
