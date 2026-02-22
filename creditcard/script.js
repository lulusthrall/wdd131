const checkoutForm = document.getElementById('checkoutForm');
const errorMessages = document.getElementById('errorMessages');


checkoutForm.addEventListener('submit', function (event) {
    event.preventDefault();

    errorMessages.innerHTML = "";
    let errors = [];

    const cardNumber = document.getElementById('cardNumber').value.trim();
    const expMonth = parseInt(document.getElementById('month').value);
    const expYear = parseInt(document.getElementById('year').value);

    if (cardNumber !== '1234123412341234') {
        errors.push("Invalid Credit Card Number.");
    }

    const now = new Date();
    const currentYear = now.getFullYear() % 100;
    const currentMonth = now.getMonth() + 1;

    if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
        errors.push("The card is expired.");
    }

    if (errors.length > 0) {
        errorMessages.innerHTML = errors.join("<br>");
    } else {
        checkoutForm.innerHTML = `
            <div style="text-align: center; padding: 50px; background: #cccccc; border-radius: 12px; box-shadow: 10px 10px 25px rgba(0,0,0,0.4);">
                <h2 style="color: #333;">Thank you for your purchase!</h2>
                <p>Your payment has been processed successfully.</p>
            </div>
        `;
    }
});