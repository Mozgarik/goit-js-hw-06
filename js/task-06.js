const validationInput = document.querySelector('#validation-input');
const dataLength = validationInput.getAttribute('data-length')
const dataLengthNum = parseInt(dataLength)

validationInput.addEventListener('blur', onInputChange);

function onInputChange() {
if (validationInput.value.length === dataLengthNum) {
validationInput.classList.remove('invalid')
validationInput.classList.add('valid');
} else {
    validationInput.classList.remove('valid')
    validationInput.classList.add('invalid')
}
}
