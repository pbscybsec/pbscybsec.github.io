const contactForm = document.querySelector('.php-email-form'); // Target the form using its class
const successMessage = document.querySelector('.sent-message');
const errorMessage = document.querySelector('.error-message');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData(contactForm);

    try {
        const response = await fetch('http://localhost:8080/submit', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            // Successful submission
            contactForm.reset(); // Clear the form
            successMessage.style.display = 'block'; // Display success message
            errorMessage.style.display = 'none'; // Hide error message
        } else {
            // Handle error cases here
            errorMessage.style.display = 'block'; // Display error message
            successMessage.style.display = 'none'; // Hide success message
        }
    } catch (error) {
        // Handle network or other errors here
        errorMessage.style.display = 'block'; // Display error message
        successMessage.style.display = 'none'; // Hide success message
    }
});
