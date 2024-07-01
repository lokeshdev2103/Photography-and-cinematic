// Initialize Firebase
var config = {
    apiKey: "AIzaSyA2-4FbsQYk8q-BMDuCTu-Hll_SsuYegsk",
    authDomain: "showphotographerinweb.firebaseapp.com",
    databaseURL: "https://showphotographerinweb.firebaseio.com",
    projectId: "showphotographerinweb",
    storageBucket: "showphotographerinweb.appspot.com",
    messagingSenderId: "799271596022",
    appId: "1:799271596022:web:9fcc2e42e5b0cdc3eb61d7",
    measurementId: "G-1D9PEW2FBG"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    //Get value
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, company, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get form value
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/* Set the width of the side navigation to 0 */

$(document).ready(function() {

    let $btns = $(".project-area .button-group button");

    $btns.click(function(e) {
        $(".project-area .button-group button").removeClass("active");
        e.target.classList.add("active");

        let selector = $(e.target).attr("data-filter");
        $(".project-area .grid").isotope({
            filter: selector,
        });

        return false;
    });

    $(".project-area .button-group #btn1").trigger("click");

    $(".project-area .grid .test-popup-link").magnificPopup({
        type: "image",
        gallery: {
            enabled: true
        },
    });
    $("a").on("click", function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $("html, body").animate({
                    scrollTop: $(hash).offset().top,
                },
                800,
                function() {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                }
            );
        } // End if
    });

    // Owl-carousel

    $(".site-main .about-area .owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            560: {
                items: 2,
            },
        },
    });
    $("#toggle").click(function() {
        $(this).toggleClass("on");
        $("#resize").toggleClass("active");
    });
    $("#resize ul li a").click(function() {
        $(this).toggleClass("on");
        $("#resize").toggleClass("active");
    });
    $(".close-btn").click(function() {
        $(this).toggleClass("on");
        $("#resize").toggleClass("active");
    });

    $(function() {
        $(document).scroll(function() {
            var $nav = $(".nav");
            $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
        });
    });



    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ?
                    target :
                    $("[name=" + this.hash.slice(1) + "]");
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $("html, body").animate({
                            scrollTop: target.offset().top,
                        },
                        1000,
                        function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) {
                                // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            }
                        }
                    );
                }
            }
        });
    // sticky navigation menu

    let nav_offset_top = $(".header_area").height() + 50;

    function navbarFixed() {
        if ($(".header_area").length) {
            $(window).scroll(function() {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $(".header_area .main-menu").addClass("navbar_fixed");
                } else {
                    $(".header_area .main-menu").removeClass("navbar_fixed");
                }
            });
        }
    }

    navbarFixed();
});