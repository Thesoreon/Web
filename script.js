/* JAVASCRIPT */
var nav = document.getElementById("SubNavigation");

window.onresize = function() {

	if(window.innerWidth > 600)
    	nav.style.display = "block";
    else 
    	$("#SubNavigation").hide();
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
	var temp = document.getElementsByClassName("galleryimage");

	if(temp.length <= 0) return;

	var modal = document.getElementById("Modal");
	var modalImg = document.getElementById("img01");
	var closeButton = document.getElementsByClassName("Close")[0];
	var caption = document.getElementById("Caption");

	for (var i = 0; i < temp.length; i++) {
		temp[i].addEventListener("click", function() {
			modal.style.display = "block";
			modalImg.src = this.src;
			caption.innerHTML = this.alt;			
		});
	}

	modal.onclick = function() { 
  		modal.style.display = "none";
	}
}

$("#Submission").click(function(e) {
	e.preventDefault();

	$.ajax({
           datatype: "html",
		   type: "POST",
           data: {email: $("#femail").val(), message: $("#Fmessage").val()},
           url: "../vendor/mailer.php",
           success: function(data)
           {	
               $("#output").html(data);
           }
	});

	return false;
});