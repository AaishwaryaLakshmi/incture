// script.js

function submitForm(event) {
    event.preventDefault(); 
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const workshop = document.getElementById("workshop").value;
    
    const message = `
    <b>Thank you for registering!</b>
        <fieldset disabled>
            <b>Your Information:</b>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Preferred Workshop:</strong> ${workshop}</p>
        </fieldset>
        
    `;
    
    document.getElementById("name").disabled = true;
    document.getElementById("email").disabled = true;
    document.getElementById("phone").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("workshop").disabled = true;
    document.getElementById("registrationForm").querySelector('input[type="submit"]').disabled = true;
    
    const submissionMessage = document.getElementById("submissionMessage");
    submissionMessage.innerHTML = message;
    submissionMessage.style.display = "block";
}
