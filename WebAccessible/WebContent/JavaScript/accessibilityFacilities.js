//Check if the keys space or enter have been pressed
function isValidated(event) {
	event || window.event;

	if (event.keyCode === 32 || event.keyCode === 13) {
		return true;
	} else {
		return false;
	}
}

// Switch the button to other state
function switchButton(button) {
	var buttonState = button.getAttribute("aria-pressed").trim().toLowerCase();

	if(buttonState == 'true') {
		buttonState = false;
	} else {
		buttonState = true;
	}
	
	button.setAttribute("aria-pressed", buttonState);
}
