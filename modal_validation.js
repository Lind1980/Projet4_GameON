/*const form = document.querySelector('.form');
form.addEventListener("submit", validate);*/
function validate(e) {
    e.preventDefault();
    const message_error = document.querySelectorAll(".message_error");
    message_error.forEach((span) => (span.textContent = ""));
    let valide = true;

    const first = document.getElementById("first").value;
    const firstError = document.getElementById("firstError");
    if (first.length < 2) {
        firstError.textContent = "Veuillez rentrer 2 caractères minimum"
        valide = false;
    }

    const last = document.getElementById("last").value;
    const lastError = document.getElementById("lastError");
    if (last.length < 2) {
        lastError.textContent = "Veuillez rentrer 2 caractères ou plus"
        valide = false;
    }

    const email = document.getElementById("email").value;
    const verifEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailError = document.getElementById("emailError");
    if (email.length < 2 || !verifEmail.test(email)) {
        emailError.textContent = "Veuillez rentrer votre email";
        valide = false;
    }

    const birthday = document.getElementById("birthdate").value;
    const birthdayError = document.getElementById("birthdayError");
    if (!birthday) {
        birthdayError.textContent = "Vous devez rentrer votre date de naissance";
        valide = false;
    }

    const quantity = document.getElementById("quantity").value;
    const verifyQuantity = /^[0-9\s]+$/;
    const quantityError = document.getElementById("quantityError");
    if (quantity === null || !verifyQuantity.test(quantity)) {
        quantityError.textContent = "Veuillez rentrer un chiffre"
        valide = false;
    }

    const location2 = document.querySelector("input[name='location']:checked");
    const locationError = document.getElementById("locationError");
    if (!location2) {
        locationError.textContent = "Veuillez choisir une option"
        valide = false;
    }

    const conditions = document.getElementById("checkbox1").checked;
    const conditionsError = document.getElementById("conditionsError");
    if (!conditions) {
        conditionsError.textContent = "Vous devez vérifier que vous acceptez les termes et conditions"
        valide = false;
    }
    
    if (valide) {
        window.confirmMessage()
        document.forms["reserve"].reset()
    }
}
