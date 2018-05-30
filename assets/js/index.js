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

    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1200, 'swing', function () {
            window.location.hash = target;
        });
    });
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

