/* JAVASCRIPT */
var nav = document.getElementById("SubNavigation");

window.onresize = function() {

	if(window.innerWidth > 600)
    	nav.style.display = "block";
};

/* JQUERY */

$(document).ready(function() {
	$(".ShowButton").click(function() {
		$("#SubNavigation").slideToggle("slow");
	});
});

/* JQUERY AJAX */

$(".image").click(function() {
   $("#PlaceHolder").load("../files/" + this.alt + ".txt");
   $("html, body").animate({ scrollTop: 0 }, "slow");
});

/* TESTING ZONE */

function testCookies() {
	alert("COOKIES: " + navigator.cookieEnabled);
}

LoadImages();

function LoadImages() {
	var temp = document.getElementsByClassName("image");
	var modal = document.getElementById("Modal");
	var modalImg = document.getElementById("img01");
	var closeButton = document.getElementsByClassName("Close")[0];

	for (var i = 0; i < temp.length; i++) {
		temp[i].addEventListener("click", function() {
			modal.style.display = "block";
			modalImg.src = this.src;			
		});
	}

	modal.onclick = function() { 
  		modal.style.display = "none";
	}
}