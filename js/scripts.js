//business Logic

var price, crustPrice, toppingPrice, totalPrice;
var total = 0;

function OrderPizza(name, size, crust, topping, total) {
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.total = total;

};
//topping price
OrderPizza.prototype.getToppingPrice = function() {
    switch (this.size) {
        case "Mega":
            return 250
            break;
        case "Large":
            return 200
            break;
        case "Medium":
            return 150
            break;
        case "regular":
            return 100
            break;
        default:
            return null;
    };
};
OrderPizza.prototype.getCrustprice = function() {
    switch (this.crust) {
        case "0":
            return 0;
            break;
        case "Crispy":
            return 200;
            break;
        case "Stuffed":
            return 250;
            break;
        case "Gluten-free":
            return 180;
            break;
        default:
            return null;
    };
};
OrderPizza.prototype.getPizzaSizePrice = function() {
    switch (this.size) {
        case 0:
            return 0;
            break;
        case "Mega":
            return 1200;
            break;
        case "Large":
            return 1000;
            break;
        case "Medium":
            return 800;
            break;
        case "small":
            return 550;
        default:
            return null;
    };
};
//Get total pizza price
OrderPizza.prototype.getPizzaPrice = function() {

    return (this.getToppingPrice() + this.getCrustprice() + this.getPizzaSizePrice());
};


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
    $("#deluxesize").last().click(function(event) {
        event.preventDefault();

        var selectedDeluxeSize = $("#deluxesize option:selected").val();
        $("#deluxetoppings").show();
        if (selectedDeluxeSize == "Mega") {

            $("#deluxetoppings").empty();
            $("#deluxetoppings").append('<label for = "mega" >  Select Extra Toppings at Ksh 250 only! </label>' + '<select class="browser-default custom-select custom-select-md mb-3 toppingsPizza" id="mega" required>' + '<option selected value = "0" > Select extra toppings! </option>' + '<option value = "Bacon" > Bacon </option>' + '<option value = "Extra Chicken" > Extra Chicken </option>' + '<option value = "Extra Onions" > Extra Onions </option> ' + '</select>');

        } else if (selectedDeluxeSize == "Large") {

            $("#deluxetoppings").empty();
            $("#deluxetoppings").append('<label for = "large" >  Select Extra Toppings at Ksh 200 only! </label>' + '<select class="browser-default custom-select custom-select-md mb-3 toppingsPizza"" id="large" required>' + '<option selected value = "0" > Select extra toppings! </option>' + '<option value = "Bacon" > Bacon </option>' + '<option value = "Extra Chicken" > Extra Chicken </option>' + '<option value = "Extra Onions" > Extra Onions </option> ' + '</select>');
        } else if (selectedDeluxeSize == "Medium") {
            $("#deluxetoppings").empty();
            $("#deluxetoppings").append('<label for = "medium" >  Select Extra Toppings at Ksh 150 only! </label>' + '<select class="browser-default custom-select custom-select-md mb-3 toppingsPizza" " id="medium" required>' + '<option selected value = "0" > Select extra toppings! </option>' + '<option value = "Bacon" > Bacon </option>' + '<option value = "Extra Chicken" > Extra Chicken </option>' + '<option value = "Extra Onions" > Extra Onions </option> ' + '</select>');

        } else if (selectedDeluxeSize == "Regular") {
            $("#deluxetoppings").empty();
            $("#deluxetoppings").append('<label for = "regular" >  Select Extra Toppings at Ksh 100 only! </label>' + '<select class="browser-default custom-select custom-select-md mb-3 toppingsPizza"" id="regular" required>' + '<option selected value = "0" > Select extra toppings! </option>' + '<option value = "Bacon" > Bacon </option>' + '<option value = "Extra Chicken" > Extra Chicken </option>' + '<option value = "Extra Onions" > Extra Onions </option> ' + '</select>');
        } else {
            $("#deluxetoppings").empty();
            alert("Select Pizza Size")
        };

    });
    let pizzaOrders = [];
    let pizzaOrderPrices = [];


    $("form#deluxepizzaForm").submit(function(event) {
        event.preventDefault();

        var inputtedName = $("#deluxepizzatype option:selected").val();
        var inputtedSize = $("#deluxesize option:selected").val();
        var inputtedCrust = $("#deluxecrust option:selected").val();
        var inputtedTopping = $("#deluxesize option:selected").val();
        var toppingName = $(".toppingsPizza option:Selected").val();
        // Validation
        if ((inputtedName == "0")) {
            alert("Please select pizza name");

            return false;

        } else if ((inputtedSize == "0")) {
            alert("Please select pizza size");
            return false;

        } else if ((inputtedCrust == "0")) {
            alert("Please select pizza crust");
            return false;

        } else if ((toppingName == "0")) {
            alert("Please select pizza topping");
            return false;

        } else {
            $("#ordersMade").show(1000);
        }

        // switch (inputtedSize) {
        //     case 0:
        //         price = 0;
        //         break;
        //     case "Mega":
        //         price = 1200;
        //         break;
        //     case "Large":
        //         price = 1000;
        //         break;
        //     case "Medium":
        //         price = 800;
        //         break;
        //     case "small":
        //         price = 550;
        //     default:
        //         console.log("error");

        // }
        // switch (inputtedCrust) {
        //     case "0":
        //         crustPrice = 0;
        //         break;
        //     case "Crispy":
        //         crustPrice = 200;
        //         break;
        //     case "Stuffed":
        //         crustPrice = 250;
        //         break;
        //     case "Gluten-free":
        //         crustPrice = 180;
        //         break;
        //     default:
        //         console.log("No price");
        // }
        // switch (inputtedTopping) {
        //     case 0:
        //         toppingPrice = 0;
        //         break;
        //     case "Mega":
        //         toppingPrice = 250;
        //         break;
        //     case "Large":
        //         toppingPrice = 200;
        //         break;
        //     case "Medium":
        //         toppingPrice = 150;
        //         break;
        //     case "small":
        //         toppingPrice = 100;
        //     default:
        //         console.log("error");
        // }



        total = price + crustPrice + toppingPrice;
        var checkoutTotal = 0;
        checkoutTotal = checkoutTotal + total;
        console.log(checkoutTotal);


        // $("#pizzaname").html($("#deluxepizzatype option:selected").val());
        // $("#pizzasize").html($("#deluxesize option:selected").val());
        // $("#pizzacrust").html($("#deluxecrust option:selected").val());
        // $("#pizzatopping").html($(".toppingsPizza option:selected").val());
        // $("#totals").html(total);
        // constructor function
        // let pizzaOrders = [];
        // let pizzaOrderPrices = [];


        var newOrder = new OrderPizza(inputtedName, inputtedSize, inputtedCrust, toppingName, total);
        pizzaOrders.push(newOrder);
        pizzaOrderPrices.push(newOrder.checkoutTotal);
        console.log(pizzaOrderPrices.reduce((a, b) => a + b, 0));

        // pizzaOrders.push(newOrder);
        // var resetOrders = () => {
        //     pizzaOrders = []
        //     $("#ordersMadeTable").empty()
        // }

        $("#ordersMadeTable").append(
            '<tr><td id="pizzaname">' +
            newOrder.name + '</td><td id="pizzasize">' +
            newOrder.size + ' Ksh' + newOrder.getPizzaSizePrice() + '</td><td id="pizzacrust">' +
            newOrder.crust + ' Ksh' + newOrder.getCrustprice() + '</td><td id="pizzatopping">' +
            newOrder.topping + ' Ksh' + newOrder.getToppingPrice() + '</td><td id="totals">' +
            'Ksh ' + newOrder.getPizzaPrice() +
            '</td></tr>');


        $("#deluxepizzatype").val("0");
        $("#deluxesize").val("0");
        $("#deluxecrust").val("0");
        $(".toppingsPizza").val("0");



    });
    $("button#checkout").click(function() {
        $("button#checkout").hide();
        $("button.addPizza").hide();
        $("button.deliver").show(1000);
        $("#addedprice").show(1000);

        console.log("Your total bills is sh. " + checkoutTotal);
        $("#pizzatotal").append("Your bill is sh. " + checkoutTotal);
    });


    // //classic pizza
    // $("#classicOrder").click(function() {
    //     $("#deluxeOrder").hide();
    //     $("#classicOrder").hide();
    //     $("#classicpizzaForm").show();
    // });
    // $("#classicsize").change(function(event) {
    //     event.preventDefault();
    //     $("#classictoppings").hide();
    // })
    // $("#classicpizzatoppings-btn-submit").click(function(event) {
    //     event.preventDefault();
    //     var selectedDeluxeSize = $("#classicsize option:selected").val();
    //     $("#classictoppings").show();


    //     if (selectedDeluxeSize == "Mega") {
    //         $("#classictoppings").empty();
    //         $("#classictoppings").append('<label for = "mega" >  Select Extra Toppings at Ksh 250 only! </label>' + '<select class="browser-default custom-select custom-select-md mb-3" id="mega">' + '<option selected value = "0" > Select extra toppings! </option>' + '<option value = "Bacon" > Bacon </option>' + '<option value = "Extra Chicken" > Extra Chicken </option>' + '<option value = "Extra Onions" > Extra Onions </option> ' + '</select>');
    //     } else if (selectedDeluxeSize == "Large") {
    //         $("#classictoppings").empty();
    //         $("#classictoppings").append('<label for = "large" >  Select Extra Toppings at Ksh 200 only! </label>' + '<select class="browser-default custom-select custom-select-md mb-3" id="large">' + '<option selected value = "0" > Select extra toppings! </option>' + '<option value = "Bacon" > Bacon </option>' + '<option value = "Extra Chicken" > Extra Chicken </option>' + '<option value = "Extra Onions" > Extra Onions </option> ' + '</select>');
    //     } else if (selectedDeluxeSize == "Medium") {
    //         $("#classictoppings").empty();
    //         $("#classictoppings").append('<label for = "medium" >  Select Extra Toppings at Ksh 150 only! </label>' + '<select class="browser-default custom-select custom-select-md mb-3" id="medium">' + '<option selected value = "0" > Select extra toppings! </option>' + '<option value = "Bacon" > Bacon </option>' + '<option value = "Extra Chicken" > Extra Chicken </option>' + '<option value = "Extra Onions" > Extra Onions </option> ' + '</select>');

    //     } else if (selectedDeluxeSize == "Regular") {
    //         $("#classictoppings").empty();
    //         $("#classictoppings").append('<label for = "regular" >  Select Extra Toppings at Ksh 100 only! </label>' + '<select class="browser-default custom-select custom-select-md mb-3" id="regular">' + '<option selected value = "0" > Select extra toppings! </option>' + '<option value = "Bacon" > Bacon </option>' + '<option value = "Extra Chicken" > Extra Chicken </option>' + '<option value = "Extra Onions" > Extra Onions </option> ' + '</select>');
    //     } else {
    //         $("#classictoppings").empty();
    //         alert("Select Pizza Size")
    //     };


    // });


});