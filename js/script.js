$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['homePage', 'firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage'],
    	menu: '#menu',
    	scrollingSpeed: 1000,
    });
});

$(function(){ 
     var navMain = $(".navbar-collapse");
     navMain.on("click", "a", null, function () {
         navMain.collapse('hide');
     });
 });