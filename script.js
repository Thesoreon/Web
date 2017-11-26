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