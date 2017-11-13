var nav = document.getElementById("Navigation");

function ShowMenu() {
	if(nav.style.display == "none")
		nav.style.display = "flex";
	else 
		nav.style.display = "none";
}

window.onresize = function() {

	if(window.innerWidth > 600)
    	nav.style.display = "flex";
};

