document.getElementById('submit-button').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Get values from form fields
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    // Check if any field is empty
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return; // Don't submit if any field is empty
    }

    // Here you would normally send the data to the server via an API call
    // For now, let's simulate a successful submission with an alert
    alert("Thank you for your message, " + name + "! We will get back to you shortly.");

    // Optionally, clear the form
    document.getElementById('contact-name').value = '';
    document.getElementById('contact-email').value = '';
    document.getElementById('contact-message').value = '';
});

