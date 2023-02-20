(function() {
    let form = document.querySelector('#contact-form');
    let fnameInput = document.querySelector('#fname');
    let lnameInput = document.querySelector('#lname');
    let emailInput = document.querySelector('#contact-email');
    let telInput = document.querySelector('#contact-tel');
    let messageInput = document.querySelector('#contact-message');

    function showErrorMessage(input, message) {
        let container = input.parentElement;
        let error= container.querySelector('.error-message');
        if (error) {
            container.removeChild(error);
        }

        if (message) {
            let error = document.createElement('div');
            error.classList.add('error-message');
            error.innerText = message;
            container.appendChild(error);
        }
    }

    function validateFName() {
        let value = fnameInput.value;

        if(!value) {
            showErrorMessage(fnameInput, 'Please enter your first name. This is a required field.');
            return false;
        }

        showErrorMessage(fnameInput, null);
        return true;

    }
    
    fnameInput.addEventListener('input', validateFName);

    function validateLName() {
        let value = lnameInput.value;

        if(!value) {
            showErrorMessage(lnameInput, 'Please enter your last name. This is a required field.');
            return false;
        }

        showErrorMessage(lnameInput, null);
        return true;

    }
    
    lnameInput.addEventListener('input', validateLName);

    function validateEmail() {
        let value = emailInput.value;

        if(!value) {
            showErrorMessage(emailInput, 'Email is a required field.');
            return false;
        }

        if (value.indexOf('@') === -1) {
            showErrorMessage(emailInput, 'You must enter a valid email address.');
            return false;
        }
    
        if (value.indexOf('.') === -1) {
            showErrorMessage(emailInput, 'You must enter a valid email address.');
            return false;
        }

        showErrorMessage(emailInput, null);
        return true;
        
    }
    emailInput.addEventListener('input', validateEmail);

    function validateTel() {
      
        let value = telInput.value;

        if (value.replace(/\D/g, '').length !== 10) {
            showErrorMessage(telInput, 'Please enter a valid phone number.');
            return false;
        
        }       
        showErrorMessage(telInput, null);
        return true;

    }
    
    telInput.addEventListener('input', validateTel);

    function validateMessage() {
        let value = messageInput.value;

        if(!value) {
            showErrorMessage(messageInput, 'This is a required field. Maximum 240 characters.');
            return false;
        }

        showErrorMessage(messageInput, null);
        return true;

    }
    
    messageInput.addEventListener('input', validateMessage);
})();