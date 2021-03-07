//business Logic
var price, crustPrice, toppingPrice;
var total = 0;

function OrderPizza(name, size, crust, total) {
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.total = total;
    this.toppings = [];

}

function ToppingPizza(topping) {
    this.topping = topping;
}

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
    $("#deluxesize").change(function(event) {
        event.preventDefault();
        $("#deluxetoppings").hide();
    })
    $("#deluxepizzatoppings-btn-submit").last().click(function(event) {
        event.preventDefault();

        var selectedDeluxeSize = $("#deluxesize option:selected").val();
        $("#deluxetoppings").show();
        if (selectedDeluxeSize == "Mega") {

            $("#deluxetoppings").empty();
            $("#deluxetoppings").append('<label for = "mega" >  Select Extra Toppings at Ksh 250 only! </label>' + '<select class="browser-default custom-select custom-select-md mb-3" id="mega">' + '<option selected value = "0" > Select extra toppings! </option>' + '<option value = "Bacon" > Bacon </option>' + '<option value = "Extra Chicken" > Extra Chicken </option>' + '<option value = "Extra Onions" > Extra Onions </option> ' + '</select>');

        } else if (selectedDeluxeSize == "Large") {

            $("#deluxetoppings").empty();
            $("#deluxetoppings").append('<label for = "large" >  Select Extra Toppings at Ksh 200 only! </label>' + '<select class="browser-default custom-select custom-select-md mb-3" id="large">' + '<option selected value = "0" > Select extra toppings! </option>' + '<option value = "Bacon" > Bacon </option>' + '<option value = "Extra Chicken" > Extra Chicken </option>' + '<option value = "Extra Onions" > Extra Onions </option> ' + '</select>');
        } else if (selectedDeluxeSize == "Medium") {
            $("#deluxetoppings").empty();
            $("#deluxetoppings").append('<label for = "medium" >  Select Extra Toppings at Ksh 150 only! </label>' + '<select class="browser-default custom-select custom-select-md mb-3" id="medium">' + '<option selected value = "0" > Select extra toppings! </option>' + '<option value = "Bacon" > Bacon </option>' + '<option value = "Extra Chicken" > Extra Chicken </option>' + '<option value = "Extra Onions" > Extra Onions </option> ' + '</select>');

        } else if (selectedDeluxeSize == "Regular") {
            $("#deluxetoppings").empty();
            $("#deluxetoppings").append('<label for = "regular" >  Select Extra Toppings at Ksh 100 only! </label>' + '<select class="browser-default custom-select custom-select-md mb-3" id="regular">' + '<option selected value = "0" > Select extra toppings! </option>' + '<option value = "Bacon" > Bacon </option>' + '<option value = "Extra Chicken" > Extra Chicken </option>' + '<option value = "Extra Onions" > Extra Onions </option> ' + '</select>');
        } else {
            $("#deluxetoppings").empty();
            alert("Select Pizza Size")
        }

    });
    $("#classicpizzatoppings-btn-submit").click(function(event) {
        event.preventDefault();
        var selectedDeluxeSize = $("#classicsize option:selected").val();


        if (selectedDeluxeSize == "Mega") {
            $("#classictoppings").append('<label for = "mega" >  Select Extra Toppings at Ksh 250 only! </label>' + '<select class="browser-default custom-select custom-select-md mb-3" id="mega">' + '<option selected value = "0" > Select extra toppings! </option>' + '<option value = "Bacon" > Bacon </option>' + '<option value = "Extra Chicken" > Extra Chicken </option>' + '<option value = "Extra Onions" > Extra Onions </option> ' + '</select>');
        } else if (selectedDeluxeSize == "Large") {
            $("#classictoppings").append('<label for = "large" >  Select Extra Toppings at Ksh 200 only! </label>' + '<select class="browser-default custom-select custom-select-md mb-3" id="large">' + '<option selected value = "0" > Select extra toppings! </option>' + '<option value = "Bacon" > Bacon </option>' + '<option value = "Extra Chicken" > Extra Chicken </option>' + '<option value = "Extra Onions" > Extra Onions </option> ' + '</select>');
        } else if (selectedDeluxeSize == "Medium") {
            $("#classictoppings").append('<label for = "medium" >  Select Extra Toppings at Ksh 150 only! </label>' + '<select class="browser-default custom-select custom-select-md mb-3" id="medium">' + '<option selected value = "0" > Select extra toppings! </option>' + '<option value = "Bacon" > Bacon </option>' + '<option value = "Extra Chicken" > Extra Chicken </option>' + '<option value = "Extra Onions" > Extra Onions </option> ' + '</select>');

        } else {
            $("#classictoppings").append('<label for = "regular" >  Select Extra Toppings at Ksh 100 only! </label>' + '<select class="browser-default custom-select custom-select-md mb-3" id="regular">' + '<option selected value = "0" > Select extra toppings! </option>' + '<option value = "Bacon" > Bacon </option>' + '<option value = "Extra Chicken" > Extra Chicken </option>' + '<option value = "Extra Onions" > Extra Onions </option> ' + '</select>');
        };

    });
    $("button#deluxepizza-btn-submit").click(function(event) {
        event.preventDefault();

    })

});