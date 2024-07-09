document.addEventListener('DOMContentLoaded', () => {
    const name = document.getElementById("name");
    const password = document.getElementById("password");
    const form = document.getElementById("action");
    const err = document.getElementById("error");

    form.addEventListener('submit', (e) => {
        let messages = [];

        if (name.value.trim() === "") {
            messages.push("Name is required");
        }

        if (password.value.length <= 6) {
            messages.push("Password must be longer than 6 characters");
        }

        if (messages.length > 0) { 
            e.preventDefault();
            err.innerHTML = messages.map(msg => `<p>${msg}</p>`).join('');
        }
    });
});

