document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
    const registrationMessage = document.getElementById("registrationMessage");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const regUsername = document.getElementById("regUsername").value;
        const regPassword = document.getElementById("regPassword").value;

        // Check if the username is already taken (you may use a more robust check in a real application)
        if (localStorage.getItem(regUsername)) {
            registrationMessage.textContent = "Username is already taken. Please choose another.";
        } else {
            // Store registration data in local storage (not secure for production)
            localStorage.setItem(regUsername, regPassword);

            registrationMessage.textContent = "Registration successful. You can now log in.";
        }
    });
});
