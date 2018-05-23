$(document).ready(function(){

    var typed = new Typed("#subText", {
        strings: ["I'm a Student...", "I'm a Developer...", "I'm an Entrepreneur..."],
        typeSpeed: 100,
        delay: 150,
        smartBackspace: true,
        loop: true,
        startDelay: 100,
        backSpeed: 30,
        showCursor: false
    })

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

