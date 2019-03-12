const userInput = document.getElementById('user-input');
const btn = document.getElementById('collect-data');
const displayData = document.getElementById('create-content');
const error = document.querySelector('.error-message');


$(document).ready(() => {

$('.widget-input').hide();

function collectData(){
	$('.widget-input').show();
	let userData = document.createElement('li');
	error.textContent = null;
	if((userInput.value).trim() !== ''){
	userData.textContent = (userInput.value).toUpperCase();
	displayData.appendChild(userData);
	$('.trash').addClass('fa-trash-alt');
	$('li').on('click',(event) => {
	$(event.currentTarget).fadeOut('slow')
	});
	$('.trash').on('click', () => {
		$('li').fadeOut('slow');
	});
	$('.trash').show();
	
	
	} else {
		error.textContent = "* Please select your clothers";
		$('.trash').hide();
	}
	
};

btn.addEventListener('click', collectData);


});