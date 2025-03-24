document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can handle the form submission, e.g., send the data to a server
    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Clear the form
    document.getElementById('contact-form').reset();
});
