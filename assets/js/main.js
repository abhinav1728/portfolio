// Scroll to Contact Section
document.getElementById('contact-link').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
});

// Handle Form Submission
document.getElementById('submit-button').addEventListener('click', function () {
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    if (name && email && message) {
        console.log("Form submitted!");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        // Clear form after submission
        document.getElementById('contact-form').reset();
        alert("Your message has been submitted.");
    } else {
        alert("Please fill out all fields.");
    }
});
