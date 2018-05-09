$(document).ready(function(){

    setInterval(function() {
        if(!($("#cursor").is(":visible"))) {
            $("#cursor").fadeIn();
        } else {
            $("#cursor").fadeOut();
        }
    }, 1000);

}) ;


$(window).scroll(function() {
    console.log("Scrolling...");
    if($("#navigation").hasClass("hidden")) {
        $("#navigation").fadeIn();
        $("#navigation").removeClass("hidden");
    }

    if($(window).scrollTop() === 0) {
        $("#navigation").addClass("hidden");
        $("#navigation").fadeOut();
    }
});

