document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.getElementById("logoutButton");
    const editContentButton = document.getElementById("editContentButton");
    const addUserButton = document.getElementById("addUserButton");
    // Add more button references for other admin tasks as needed

    logoutButton.addEventListener("click", function () {
        // You can add any logout logic here, such as clearing session data or cookies.
        // For this example, we will simply redirect to the login page.
        window.location.href = "login.html";
    });

    editContentButton.addEventListener("click", function () {
        // Add code to redirect to the content editing page or perform other content management tasks
        // Example: window.location.href = "edit_content.html";
    });

    addUserButton.addEventListener("click", function () {
        // Add code to redirect to the user creation page or perform other user management tasks
        // Example: window.location.href = "add_user.html";
    });

    // Add event listeners for other admin task buttons as needed
});
