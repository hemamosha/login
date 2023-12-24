document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
    const registrationMessage = document.getElementById("registrationMessage");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const regUsername = document.getElementById("regUsername").value;
        const regPassword = document.getElementById("regPassword").value;

        // Send a POST request to register.php to handle user registration
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "register.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Update the registration message based on the response
                registrationMessage.textContent = xhr.responseText;
            }
        };

        // Send the registration data to the server
        xhr.send(`regUsername=${regUsername}&regPassword=${regPassword}`);
    });
});
