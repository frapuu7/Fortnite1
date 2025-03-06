document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleForm");
    const formContainer = document.getElementById("formContainer");

    toggleButton.addEventListener("click", function () {
        formContainer.style.display = formContainer.style.display === "block" ? "none" : "block";
    });
});
