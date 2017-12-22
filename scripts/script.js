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

/* Angular */


/* TESTING ZONE */

//Function that tests if are cookies enabled
function testCookies() {
	alert("COOKIES: " + navigator.cookieEnabled);
}

//Image Gallery
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

//Function for submiting form
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

//Angular testing
TryAngular();

function TryAngular() {
	try {
		var app = angular.module("myApp", []);

		app.controller("myCtrl", function($scope) {
			$scope.text = "my first angular expression";
		});

		app.directive("thDirective", function() {
			return {
				template: "<b>My first angular directive</b>"
			};
		});
	}
    catch (e) {
        //Tempomary solution
	    console.log("There is no angular application");
	}
}

//Time
refreshDate();

function refreshDate() {
    requestAnimationFrame(refreshDate);
	var d = new Date();
 
	$("#DateHolder").html(d.getDate() + "." + getMonth(d.getMonth()) + "." + d.getFullYear() + " " + getDate(d.getHours()) + ":" + getDate(d.getMinutes()) + ":" + getDate(d.getSeconds()));
}

function getDate(x) {
	return x > 9 ? x : "0" + x;
}

//This function is there because month started with 0 not with 1 like january
function getMonth(x) {
	x++;
	return x > 9 ? x : "0" + x;
}

//JSON
$.getJSON("../scripts/objects.json", function(data) {
	//alert(data.Hobbies[0]);
});