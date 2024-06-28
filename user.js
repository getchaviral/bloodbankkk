document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('update-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Normally, here you would send the form data to the server via an AJAX request.
        // For this example, we'll just display a success message.
        
        successMessage.classList.remove('hidden');
        successMessage.style.opacity = 1;

        // Optionally, clear the form after submission
        form.reset();
    });
});
