$("#button1").click(function () {
    var num1 = Number($("#num1").val());
    var num2 = Number($("#num2").val());
    var num3 = Number($("#num3").val());
    var num4 = Number($("#num4").val());
    var num5 = Number($("#num5").val());

    var sum = num1 + num2 + num3 + num4 + num5;
    var product = num1 * num2 * num3 * num4 * num5;
    var average = (num1 + num2 + num3 + num4 + num5) / 5;
    var largest = (Math.max(num1, num2, num3, num4, num5));
    var smallest = (Math.min(num1, num2, num3, num4, num5))
    if ($("#num1").val() && $("#num2").val() && $("#num3").val() && $("#num4").val() && $("#num5").val() !== "") {
        $("#sum").text("The sum is" + sum);
        $("#product").text("The product is " + product);
        $("#average").text("The average is " + average);
        $("#largest").text("The largest is " + largest);
        $("#smallest").text("The smallest is " + smallest);
    }
    
    $("#num1").val("")
    $("#num2").val("")
    $("#num3").val("")
    $("#num4").val("")
    $("#num5").val("")


})

$("#codeMath").hide();
$("#showMathCode").click(function () {
    $("#codeMath").toggle();
})


$("#btn1").click(function () {
    var number1 = Number($("#number1").val());
    var number2 = Number($("#number2").val());
    var numbers = [];
   
    for (var loop = 1; loop <= 100; loop++) {
        if (loop % number1 == 0 && loop % number2 == 0) {
            numbers.push("FIZZBUZZ")
        } else if (loop % number1 == 0) {
            numbers.push("FIZZ")
        } else if (loop % number2 == 0) {
            numbers.push("BUZZ")
        } else {
            numbers.push(loop);
        }
    }
    if ($("#number1").val() && $("#number2").val() !== "") {
        var output = numbers.join(' , ');
        $("#fizzbuzz").text(output);
    }
    else {
        $("#fizzbuzz").text("Please Enter two numbers.")
    }
   
})

$("#codeFizzBuzz").hide();
$("#showFizzBuzzCode").click(function () {
    $("#codeFizzBuzz").toggle();
})

$("#buttonFactorial").click(function () {
    var num = Number($("#num").val());
    var fact = 1;
   
    for (var i = num; i >= 1; i--) {
        fact = fact * i;
    }
    
    if ($("#num").val() !== "") {
        var result = fact;
        $("#factorial").text("The factorial is " + result);
    }
    else {
        $("#factorial").text("Please Enter a Number.")
    }
    $("#num").val("");
})

$("#factorialCode").hide();
$("#showFactorialCode").click(function () {
    $("#factorialCode").toggle();
})

$("#button3").click(function () {
    var someText = $("#sometext").val();
    var checkForPalindrome = someText.split('').reverse().join('');
        if ($("#sometext").val("")) {
            $("#palindrome").text("");
        }
    if (someText === checkForPalindrome && someText !== "") {
        $("#palindrome").text("The word is a palindrome!")
    } else if(someText !== "" && someText !== checkForPalindrome){
        $("#palindrome").text("The word is not a palindrome!")
    }
    $("#sometext").val("");
    
})

$("#codePalindrome").hide();
$("#showPalindromeCode").click(function () {
    $("#codePalindrome").toggle();
})