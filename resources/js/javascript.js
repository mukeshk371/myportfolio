function activeButton(button) {

	var allActiveButton = document.getElementsByClassName("active");
	for(var i = 0 ; i<allActiveButton.length; i++){
		allActiveButton[i].classList.toggle("active");
	}
	button.classList.toggle("active");
}