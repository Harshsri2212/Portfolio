// Handle form submission (For demonstration, logs form data)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log("Form Submitted:", { name, email, message });

    alert("Thank you for your message! I'll get back to you soon.");
});
