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
    //deluxeorder
    $("#deluxeOrder").click(function() {
        $("#deluxeOrder").hide();
        $("#classicOrder").hide();
        $("#deluxepizzaForm").show();
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
            $("#deluxetoppings").append('<label for = "mega" >  Select Extra Toppings at Ksh 250 only! </label>' + '<select class="browser-default custom-select custom-select-md mb-3 toppingsPizza" id="mega">' + '<option selected value = "0" > Select extra toppings! </option>' + '<option value = "Bacon" > Bacon </option>' + '<option value = "Extra Chicken" > Extra Chicken </option>' + '<option value = "Extra Onions" > Extra Onions </option> ' + '</select>');

        } else if (selectedDeluxeSize == "Large") {

            $("#deluxetoppings").empty();
            $("#deluxetoppings").append('<label for = "large" >  Select Extra Toppings at Ksh 200 only! </label>' + '<select class="browser-default custom-select custom-select-md mb-3 toppingsPizza"" id="large">' + '<option selected value = "0" > Select extra toppings! </option>' + '<option value = "Bacon" > Bacon </option>' + '<option value = "Extra Chicken" > Extra Chicken </option>' + '<option value = "Extra Onions" > Extra Onions </option> ' + '</select>');
        } else if (selectedDeluxeSize == "Medium") {
            $("#deluxetoppings").empty();
            $("#deluxetoppings").append('<label for = "medium" >  Select Extra Toppings at Ksh 150 only! </label>' + '<select class="browser-default custom-select custom-select-md mb-3 toppingsPizza" " id="medium">' + '<option selected value = "0" > Select extra toppings! </option>' + '<option value = "Bacon" > Bacon </option>' + '<option value = "Extra Chicken" > Extra Chicken </option>' + '<option value = "Extra Onions" > Extra Onions </option> ' + '</select>');

        } else if (selectedDeluxeSize == "Regular") {
            $("#deluxetoppings").empty();
            $("#deluxetoppings").append('<label for = "regular" >  Select Extra Toppings at Ksh 100 only! </label>' + '<select class="browser-default custom-select custom-select-md mb-3 toppingsPizza"" id="regular">' + '<option selected value = "0" > Select extra toppings! </option>' + '<option value = "Bacon" > Bacon </option>' + '<option value = "Extra Chicken" > Extra Chicken </option>' + '<option value = "Extra Onions" > Extra Onions </option> ' + '</select>');
        } else {
            $("#deluxetoppings").empty();
            alert("Select Pizza Size")
        };

    });
    $("#deluxepizza-btn-submit").click(function(event) {
        event.preventDefault();
        var inputtedName = $("#deluxepizzatype option:selected").val();
        var inputtedSize = $("#deluxesize option:selected").val();
        var inputtedCrust = $("#deluxecrust option:selected").val();
        var inputtedTopping = $("#deluxesize option:selected").val();

        switch (inputtedSize) {
            case 0:
                price = 0;
                break;
            case "Mega":
                price = 1200;
                console.log(price);
                break;
            case "Large":
                price = 1000;
                console.log(price);
                break;
            case "Medium":
                price = 800;
                console.log(price);
                break;
            case "small":
                price = 550;
                console.log(price);
            default:
                console.log("error");

        }
        switch (inputtedCrust) {
            case "0":
                crustPrice = 0;
                break;
            case "Crispy":
                crustPrice = 200;
                break;
            case "Stuffed":
                crustPrice = 250;
                break;
            case "Gluten-free":
                crustPrice = 180;
                break;
            default:
                console.log("No price");
        }
        switch (inputtedTopping) {
            case 0:
                toppingPrice = 0;
                break;
            case "Mega":
                toppingPrice = 250;
                break;
            case "Large":
                toppingPrice = 200;
                break;
            case "Medium":
                toppingPrice = 150;
                break;
            case "small":
                toppingPrice = 100;
            default:
                console.log("error");
        }

        if ((inputtedSize == "0") && (inputtedCrust == "0")) {
            console.log("nothing selected");
            alert("Please select pizza name, size and crust");


        } else {
            $("#ordersMade").show(1000);
        }
        total = price + crustPrice + toppingPrice;
        console.log(total);
        let checkoutTotal = 0;
        checkoutTotal = checkoutTotal + total;


        $("#pizzaname").html($("#deluxepizzatype option:selected").val());
        $("#pizzasize").html($("#deluxesize option:selected").val());
        $("#pizzacrust").html($("#deluxecrust option:selected").val());
        $("#pizzatopping").html($(".toppingsPizza option:selected").val());
        $("#totals").html(total);
        // constructor function
        var newOrder = new OrderPizza(name, size, crust, topping, total);
        NewOrder.forEach()
        $("#ordersMadeTable").append('<tr><td id="pizzaname">' + newOrder.name + '</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">' + newOrder.crust + '</td><td id="pizzatopping">' + newOrder.topping + '</td><td id="totals">' + newOrder.total + '</td></tr>');

        console.log(newOrder);
        $("#deluxepizzatype option:selected").val("");
        $("#deluxesize option:selected").val("");
        $("#deluxecrust option:selected").val("");
        $(".toppingsPizza option:selected").val("");

    });

    //classic pizza
    $("#classicOrder").click(function() {
        $("#deluxeOrder").hide();
        $("#classicOrder").hide();
        $("#classicpizzaForm").show();
    });
    $("#classicsize").change(function(event) {
        event.preventDefault();
        $("#classictoppings").hide();
    })
    $("#classicpizzatoppings-btn-submit").click(function(event) {
        event.preventDefault();
        var selectedDeluxeSize = $("#classicsize option:selected").val();
        $("#classictoppings").show();


        if (selectedDeluxeSize == "Mega") {
            $("#classictoppings").empty();
            $("#classictoppings").append('<label for = "mega" >  Select Extra Toppings at Ksh 250 only! </label>' + '<select class="browser-default custom-select custom-select-md mb-3" id="mega">' + '<option selected value = "0" > Select extra toppings! </option>' + '<option value = "Bacon" > Bacon </option>' + '<option value = "Extra Chicken" > Extra Chicken </option>' + '<option value = "Extra Onions" > Extra Onions </option> ' + '</select>');
        } else if (selectedDeluxeSize == "Large") {
            $("#classictoppings").empty();
            $("#classictoppings").append('<label for = "large" >  Select Extra Toppings at Ksh 200 only! </label>' + '<select class="browser-default custom-select custom-select-md mb-3" id="large">' + '<option selected value = "0" > Select extra toppings! </option>' + '<option value = "Bacon" > Bacon </option>' + '<option value = "Extra Chicken" > Extra Chicken </option>' + '<option value = "Extra Onions" > Extra Onions </option> ' + '</select>');
        } else if (selectedDeluxeSize == "Medium") {
            $("#classictoppings").empty();
            $("#classictoppings").append('<label for = "medium" >  Select Extra Toppings at Ksh 150 only! </label>' + '<select class="browser-default custom-select custom-select-md mb-3" id="medium">' + '<option selected value = "0" > Select extra toppings! </option>' + '<option value = "Bacon" > Bacon </option>' + '<option value = "Extra Chicken" > Extra Chicken </option>' + '<option value = "Extra Onions" > Extra Onions </option> ' + '</select>');

        } else if (selectedDeluxeSize == "Regular") {
            $("#classictoppings").empty();
            $("#classictoppings").append('<label for = "regular" >  Select Extra Toppings at Ksh 100 only! </label>' + '<select class="browser-default custom-select custom-select-md mb-3" id="regular">' + '<option selected value = "0" > Select extra toppings! </option>' + '<option value = "Bacon" > Bacon </option>' + '<option value = "Extra Chicken" > Extra Chicken </option>' + '<option value = "Extra Onions" > Extra Onions </option> ' + '</select>');
        } else {
            $("#classictoppings").empty();
            alert("Select Pizza Size")
        };


    });


});