$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['homePage', 'clipins', 'wavy', 'halos', 'curly', 'kinky', 'aboutus'],
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