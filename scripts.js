/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('.newsletter form'); 
    const emailInput = document.getElementById('email');         
    const messageDiv = document.querySelector('.newsletter .message'); 

    // Add event listener for form submission
    if (form && emailInput && messageDiv) {
        form.addEventListener('submit', function(event) {
            
            // Prevent the default form submission behavior 
            event.preventDefault();
            
            // Get the email address entered by the user
            const email = emailInput.value.trim();
            
            if (email === "") {
                // 2. If no email is entered, display an error message
                messageDiv.innerHTML = "Please enter a valid email address.";
                messageDiv.style.color = "red";
                messageDiv.style.backgroundColor = "transparent";
            } else {
                // 3. If an email is entered, display the success message
                const successMessage = `Thank you! Your email address ${email} has been added to our mailing list!`;
                
                messageDiv.innerHTML = successMessage;
                // Set color to white as required for the green newsletter background
                messageDiv.style.color = "white"; 
                messageDiv.style.backgroundColor = "transparent";

                // Clear the input field after successful submission
                emailInput.value = '';
            }
        });
    } else {
        console.error("One or more required elements for the newsletter form were not found in the HTML.");
    }
});