//FORM INPUT SELECTORS
const form = document.querySelector('#form');
const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zipCode = document.querySelector('#zip-code');
const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#password-confirmation');

//ERROR MESSAGE SELECTORS
const emailError = document.querySelector('#email-error');
const countryError = document.querySelector('#country-error');
const zipCodeError = document.querySelector('#zip-code-error');
const passwordError = document.querySelector('#password-error');
const passwordConfirmationError = document.querySelector(
	'#password-confirmation-error'
);

const emailRegex = () => {
	var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(email.value);
};

const validateEmail = () => {
	emailError.innerText = emailRegex() ? `` : `Please enter a valid email`;
	!emailRegex()
		? email.classList.add('error')
		: email.classList.remove('error');
};

const formValidation = (e) => {
	if (!emailRegex()) {
		e.preventDefault();
		alert('please fill out the form correctly');
	}
};

email.addEventListener('mouseleave', validateEmail);

form.addEventListener('submit', formValidation);
