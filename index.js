const from = document.querySelector('#form');

const formValidation = (e) => {
	e.preventDefault();
	console.log(e.target);
};

form.addEventListener('submit', formValidation);
