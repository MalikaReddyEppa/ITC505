document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registrationForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form fields and sanitize inputs
        let firstName = sanitizeInput(document.getElementById("firstName").value);
        let lastName = sanitizeInput(document.getElementById("lastName").value);
        let email = sanitizeInput(document.getElementById("email").value);
        let password = sanitizeInput(document.getElementById("password").value);
        let confirmPassword = sanitizeInput(document.getElementById("confirmPassword").value);

        let emailError = document.getElementById("emailError");
        let passwordError = document.getElementById("passwordError");

        emailError.textContent = "";
        passwordError.textContent = "";

        // Validation
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            alert("All fields are required.");
            return;
        }

        if (!validateEmail(email)) {
            emailError.textContent = "Invalid email format.";
            return;
        }

        if (password !== confirmPassword) {
            passwordError.textContent = "Passwords do not match.";
            return;
        }

        alert("Registration Successful!");
    });
});

// Email validation function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

// XSS Protection: Sanitize user input
function sanitizeInput(input) {
    return input.replace(/[<>&"'\/]/g, function(char) {
        const map = {
            '<': '&lt;',
            '>': '&gt;',
            '&': '&amp;',
            '"': '&quot;',
            "'": '&#x27;',
            "/": '&#x2F;'
        };
        return map[char];
    });
}
