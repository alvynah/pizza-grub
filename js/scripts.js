//User Logic
$(document).ready(function() {
    jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 2000 // 2 seconds

    function openNav() {
        document.getElementById("mySidenav").style.width = "150px";
    };

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    };
    $("#deluxeOrder").click(function() {
        $("#deluxeOrder").hide();
        $("#classicOrder").hide();
        $("#deluxepizzaForm").show();
    });
    $("#classicOrder").click(function() {
        $("#deluxeOrder").hide();
        $("#classicOrder").hide();
        $("#classicpizzaForm").show();
    });
    $("#deluxepizzatoppings-btn-submit").click(function(event) {
        event.preventDefault();
        $("#mediumToppings").show($("#deluxetoppings"));

    });
    $("#classicpizzatoppings-btn-submit").click(function(event) {
        event.preventDefault();
        $("#mediumToppings").show();
    });

});