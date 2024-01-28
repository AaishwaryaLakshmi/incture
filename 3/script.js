let pet = document.getElementById('pet');
let userName = '';

function greetUser() {
    userName = prompt("Enter your name:");
    if (userName !== null && userName !== '') {
        let greetingMessage = `Hello, ${userName}!\nWelcome to the Virtual Pet & Donut Shop!\n\nClick OK to place your order!`;
        alert(greetingMessage);
        pet.style.backgroundImage = "url('happy_pet.png')"; 
        
        document.getElementById('clickOnMe').style.display = 'none';

        document.getElementById('orderFormContainer').style.display = 'block';
    }
}

function petClicked() {
    greetUser(); 

    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(function() {
        pet.style.backgroundImage = "url('sad_pet.png')"; 
        alert("Hey, " + userName + "! Why did you leave me alone?");
    }, 300000);
}

function submitForm(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let cakeDonuts = document.getElementById('cakeDonuts').value;
    let glazedDonuts = document.getElementById('glazedDonuts').value;
    let minutes = document.getElementById('minutes').value;

    if (name === '' || cakeDonuts === '' || glazedDonuts === '' || minutes === '') {
        alert('All fields are required.');
        return;
    }

    if (cakeDonuts.toLowerCase() === 'dozen') cakeDonuts = 12;
    if (glazedDonuts.toLowerCase() === 'dozen') glazedDonuts = 12;

    let cakeDonutPrice = 1.50; // Price per cake donut
    let glazedDonutPrice = 2.00; // Price per baked donut
    let subtotal = (parseFloat(cakeDonuts) * cakeDonutPrice) + (parseFloat(glazedDonuts) * glazedDonutPrice);

    let taxRate = 0.1; // Assuming tax rate is 10%
    let tax = subtotal * taxRate;

    // Calculate total
    let total = subtotal + tax;

    // Display calculated values
    document.getElementById('subtotal').value = subtotal.toFixed(2);
    document.getElementById('tax').value = tax.toFixed(2);
    document.getElementById('total').value = total.toFixed(2);
    console.log('Name: ' + name);
    console.log('Number of Cake Donuts: ' + cakeDonuts);
    console.log('Number of Baked Donuts: ' + glazedDonuts);
    console.log('Number of Minutes: ' + minutes);
    console.log('Subtotal: $' + subtotal.toFixed(2));
    console.log('Tax: $' + tax.toFixed(2));
    console.log('Total: $' + total.toFixed(2));
}

pet.addEventListener('click', petClicked);

let inactivityTimer = setTimeout(function() {  // Change pet image to sad face after 5 minutes of inactivity
    pet.style.backgroundImage = "url('sad_pet.png')"; 
    alert("Hey, you forgot about me!");
}, 300000); 
