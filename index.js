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

let isValidCountry;
let passwordsMatch;

const countryList = [
	'Afghanistan',
	'Albania',
	'Algeria',
	'American Samoa',
	'Andorra',
	'Angola',
	'Anguilla',
	'Antarctica',
	'Antigua and Barbuda',
	'Argentina',
	'Armenia',
	'Aruba',
	'Australia',
	'Austria',
	'Azerbaijan',
	'Bahamas (the)',
	'Bahrain',
	'Bangladesh',
	'Barbados',
	'Belarus',
	'Belgium',
	'Belize',
	'Benin',
	'Bermuda',
	'Bhutan',
	'Bolivia (Plurinational State of)',
	'Bonaire, Sint Eustatius and Saba',
	'Bosnia and Herzegovina',
	'Botswana',
	'Bouvet Island',
	'Brazil',
	'British Indian Ocean Territory (the)',
	'Brunei Darussalam',
	'Bulgaria',
	'Burkina Faso',
	'Burundi',
	'Cabo Verde',
	'Cambodia',
	'Cameroon',
	'Canada',
	'Cayman Islands (the)',
	'Central African Republic (the)',
	'Chad',
	'Chile',
	'China',
	'Christmas Island',
	'Cocos (Keeling) Islands (the)',
	'Colombia',
	'Comoros (the)',
	'Congo (the Democratic Republic of the)',
	'Congo (the)',
	'Cook Islands (the)',
	'Costa Rica',
	'Croatia',
	'Cuba',
	'Curaçao',
	'Cyprus',
	'Czechia',
	"Côte d'Ivoire",
	'Denmark',
	'Djibouti',
	'Dominica',
	'Dominican Republic (the)',
	'Ecuador',
	'Egypt',
	'El Salvador',
	'Equatorial Guinea',
	'Eritrea',
	'Estonia',
	'Eswatini',
	'Ethiopia',
	'Falkland Islands (the) [Malvinas]',
	'Faroe Islands (the)',
	'Fiji',
	'Finland',
	'France',
	'French Guiana',
	'French Polynesia',
	'French Southern Territories (the)',
	'Gabon',
	'Gambia (the)',
	'Georgia',
	'Germany',
	'Ghana',
	'Gibraltar',
	'Greece',
	'Greenland',
	'Grenada',
	'Guadeloupe',
	'Guam',
	'Guatemala',
	'Guernsey',
	'Guinea',
	'Guinea-Bissau',
	'Guyana',
	'Haiti',
	'Heard Island and McDonald Islands',
	'Holy See (the)',
	'Honduras',
	'Hong Kong',
	'Hungary',
	'Iceland',
	'India',
	'Indonesia',
	'Iran (Islamic Republic of)',
	'Iraq',
	'Ireland',
	'Isle of Man',
	'Israel',
	'Italy',
	'Jamaica',
	'Japan',
	'Jersey',
	'Jordan',
	'Kazakhstan',
	'Kenya',
	'Kiribati',
	"Korea (the Democratic People's Republic of)",
	'Korea (the Republic of)',
	'Kuwait',
	'Kyrgyzstan',
	"Lao People's Democratic Republic (the)",
	'Latvia',
	'Lebanon',
	'Lesotho',
	'Liberia',
	'Libya',
	'Liechtenstein',
	'Lithuania',
	'Luxembourg',
	'Macao',
	'Madagascar',
	'Malawi',
	'Malaysia',
	'Maldives',
	'Mali',
	'Malta',
	'Marshall Islands (the)',
	'Martinique',
	'Mauritania',
	'Mauritius',
	'Mayotte',
	'Mexico',
	'Micronesia (Federated States of)',
	'Moldova (the Republic of)',
	'Monaco',
	'Mongolia',
	'Montenegro',
	'Montserrat',
	'Morocco',
	'Mozambique',
	'Myanmar',
	'Namibia',
	'Nauru',
	'Nepal',
	'Netherlands (the)',
	'New Caledonia',
	'New Zealand',
	'Nicaragua',
	'Niger (the)',
	'Nigeria',
	'Niue',
	'Norfolk Island',
	'Northern Mariana Islands (the)',
	'Norway',
	'Oman',
	'Pakistan',
	'Palau',
	'Palestine, State of',
	'Panama',
	'Papua New Guinea',
	'Paraguay',
	'Peru',
	'Philippines (the)',
	'Pitcairn',
	'Poland',
	'Portugal',
	'Puerto Rico',
	'Qatar',
	'Republic of North Macedonia',
	'Romania',
	'Russian Federation (the)',
	'Rwanda',
	'Réunion',
	'Saint Barthélemy',
	'Saint Helena, Ascension and Tristan da Cunha',
	'Saint Kitts and Nevis',
	'Saint Lucia',
	'Saint Martin (French part)',
	'Saint Pierre and Miquelon',
	'Saint Vincent and the Grenadines',
	'Samoa',
	'San Marino',
	'Sao Tome and Principe',
	'Saudi Arabia',
	'Senegal',
	'Serbia',
	'Seychelles',
	'Sierra Leone',
	'Singapore',
	'Sint Maarten (Dutch part)',
	'Slovakia',
	'Slovenia',
	'Solomon Islands',
	'Somalia',
	'South Africa',
	'South Georgia and the South Sandwich Islands',
	'South Sudan',
	'Spain',
	'Sri Lanka',
	'Sudan (the)',
	'Suriname',
	'Svalbard and Jan Mayen',
	'Sweden',
	'Switzerland',
	'Syrian Arab Republic',
	'Taiwan',
	'Tajikistan',
	'Tanzania, United Republic of',
	'Thailand',
	'Timor-Leste',
	'Togo',
	'Tokelau',
	'Tonga',
	'Trinidad and Tobago',
	'Tunisia',
	'Turkey',
	'Turkmenistan',
	'Turks and Caicos Islands (the)',
	'Tuvalu',
	'Uganda',
	'Ukraine',
	'United Arab Emirates (the)',
	'United Kingdom of Great Britain and Northern Ireland (the)',
	'United States Minor Outlying Islands (the)',
	'United States of America (the)',
	'Uruguay',
	'Uzbekistan',
	'Vanuatu',
	'Venezuela (Bolivarian Republic of)',
	'Viet Nam',
	'Virgin Islands (British)',
	'Virgin Islands (U.S.)',
	'Wallis and Futuna',
	'Western Sahara',
	'Yemen',
	'Zambia',
	'Zimbabwe',
	'Åland Islands',
];

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

const validateCountry = () => {
	const properCase = (country) => {
		if (country) {
			return `${country[0].toUpperCase()}${country.slice(1).toLowerCase()}`;
		}
	};

	const countryProperCase = properCase(country.value);

	if (!countryList.includes(countryProperCase)) {
		countryError.innerText = `Please enter a valid Country`;
		country.classList.add('error');
		isValidCountry = false;
	} else {
		countryError.innerText = ``;
		country.classList.remove('error');
		isValidCountry = true;
	}
};

const zipCodeRegex = () => {
	const re = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

	return re.test(zipCode.value);
};

const validateZipCode = () => {
	if (!zipCodeRegex()) {
		zipCodeError.innerText = `Please enter a valid zip code`;
		zipCode.classList.add('error');
	} else {
		zipCodeError.innerText = ``;
		zipCode.classList.remove('error');
	}
};

const passwordRegex = () => {
	const re =
		/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$/;
	return re.test(password.value);
};

const validatePassword = () => {
	console.log(passwordRegex());
	if (!passwordRegex()) {
		passwordError.innerText = `Password must be at least 8 characters long. One lowercase, one uppercase, one number and one special character`;
		password.classList.add('error');
	} else {
		passwordError.innerText = ``;
		password.classList.remove('error');
	}
};

const validatePasswordConfirmation = () => {
	if (password.value !== passwordConfirmation.value) {
		passwordConfirmationError.innerText = `Passwords don't match`;
		passwordConfirmation.classList.add('error');
		passwordsMatch = false;
	} else {
		passwordConfirmationError.innerText = ``;
		passwordConfirmation.classList.remove('error');
		passwordsMatch = true;
	}
};

const formValidation = (e) => {
	if (
		!emailRegex() ||
		!isValidCountry ||
		!zipCodeRegex() ||
		!passwordRegex() ||
		!passwordsMatch
	) {
		e.preventDefault();
		alert('please fill out the form correctly');
	}
};

email.addEventListener('keyup', validateEmail);
country.addEventListener('keyup', validateCountry);
zipCode.addEventListener('keyup', validateZipCode);
password.addEventListener('keyup', validatePassword);
passwordConfirmation.addEventListener('keyup', validatePasswordConfirmation);

form.addEventListener('submit', formValidation);
