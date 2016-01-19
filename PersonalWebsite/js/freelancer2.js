
//This is the function that runs when the submit button is clicked.
function numAlert() {
    //The numbers the user submits are then transferred into JavaScript variables.
    //It should be noted that the values returned from the user's submission are string and not numeric values.
    var num1 = document.getElementById('number1').value;
    var num2 = document.getElementById('number2').value;
    var num3 = document.getElementById('number3').value;
    var num4 = document.getElementById('number4').value;
    var num5 = document.getElementById('number5').value;
    //Utilizing a Math object, the greatest and least number from the set is determined. The math object converts the
    //string values into numeric ones.
    var jimmy = Math.max(num1, num2, num3, num4, num5);
    document.getElementById('answer').textContent = "The greatest number is " + jimmy + ".";
    jimmy = Math.min(num1, num2, num3, num4, num5);
    document.getElementById('answer1').textContent = "The least number is " + jimmy + ".";
    //the parseInt function allows the string values to be converted into numeric ones.
    num1 = parseInt(num1, 10);
    num2 = parseInt(num2, 10);
    num3 = parseInt(num3, 10);
    num4 = parseInt(num4, 10);
    num5 = parseInt(num5, 10);
    //The numeric values are then utilized to find product, mean, and sum of the data set.
    var total = num1 + num2 + num3 + num4 + num5;
    document.getElementById('answer2').textContent = "The sum of all the numbers is " + total + ".";
    var mean = total / 5;
    document.getElementById('answer3').textContent = "The mean of the numbers is " + mean + ".";
    var product = num1 * num2 * num3 * num4 * num5;
    document.getElementById('answer4').textContent = "The product of all the numbers is " + product + ".";
};



function numAlert2() {
    var bobby = parseInt(document.getElementById('factorial').value, 10);
    if (bobby === 0) {
        document.getElementById('factorialAnswer').textContent = "The factorial is 1."
    }
    else if (bobby < 0) {
        document.getElementById('factorialAnswer').textContent = "Please enter a positive number.";
    }
    else {
        var fact = 1;
        //the inside of the for funtion could not be set to bobby because bobby is referenced within the for pretext in ().
        //if bobby were mentioned in for, its value would change in the pretext and thus the function would be stuck in a loop.
        for (var i = 1; i <= bobby; i++) {
            fact = fact * i;
        }
        document.getElementById('factorialAnswer').textContent = "The factorial is " + fact + ".";
    };
};



function numAlert3() {
    var jimmy = parseInt(document.getElementById('fizz').value, 10);
    var bobby = parseInt(document.getElementById('buzz').value, 10);
    var dataSet = [];
    if (jimmy > 100 || bobby > 100) {
        document.getElementById('multiple').textContent = "Check both values. Please enter a value less than 100 but greater than 1.";
    }
    else if (jimmy < 2 || bobby < 2) {
        document.getElementById('multiple').textContent = "Check both values. Please enter a value greater than 1 but less than 100.";
    }
    else {
        for (var i = 1; i <= 100; i++) {
            if (i % bobby === 0 && i % jimmy === 0) {
                dataSet.push('fizzbuzz\n');
            }
            else if (i % jimmy === 0) {
                dataSet.push('fizz\n');
            }
            else if (i % bobby === 0) {
                dataSet.push('buzz\n');
            }
            else {
                dataSet.push(i);
            }
        };
        document.getElementById('multiple').textContent = dataSet;
    };
};



function wordAlert() {
    var jimmy = document.getElementById('palindromeInput').value;
    var bobby = jimmy.toUpperCase();
    var timmy = "";
    for (var i = bobby.length - 1; i >= 0; i--) {
        timmy += bobby[i];
    };
    //alert(timmy);
    if (timmy === bobby) {
        document.getElementById('palindrome').textContent = "The word/ phrase " + jimmy + " is a palindrome!";
    }
    else {
        document.getElementById('palindrome').textContent = "The word/ phrase " + jimmy + " is not a palindrome.";
    };
};