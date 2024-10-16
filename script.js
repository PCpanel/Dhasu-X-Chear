document.getElementById('human-check-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const checkbox = document.getElementById('human-checkbox');
    const messageDiv = document.getElementById('message');

    if (checkbox.checked) {
        messageDiv.textContent = "Thank you for confirming you are human! Redirecting...";
        messageDiv.style.color = "green";
        setTimeout(() => {
            window.location.href = "https://www.mediafire.com/file/2fhmyly501w3yo1/Dhasu_X_Cheat_V37.zip/file";
        }, 3000); // Redirects after 3 seconds
    } else {
        messageDiv.textContent = "Please check the box to confirm.";
        messageDiv.style.color = "red";
    }
});
