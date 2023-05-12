// Using if/else statements, create a JavaScript code in a script tag that follows the following rules:

// If the value is truthy, print true;
// If the value is falsy, print the corresponding result:
// "The boolean value false is falsy";
// "The null value is falsy";
// "undefined is falsy";
// "The number 0 is falsy (the only falsy number)";
// "The empty string is falsy (the only falsy string)";

const input1 = 'I am a string'
const input2 = false
const input3 = null
const input4 = undefined
const input5 = 0 
const input6 = ''

if(input1){
    console.log(true)
}

if(input2){
    console.log(true)
}else{
    console.log("The boolean value false is falsy")
}

if(input3){
    console.log(true)
}else{
    console.log("The null value is falsy")
}

if(input4){
    console.log(true)
}else{
    console.log("undefined is falsy")
}

if(input5){
    console.log(true)
}else{
    console.log("The number 0 is falsy (the only falsy number)")
}

if(input6){
    console.log(true)
}else{
    console.log("The empty string is falsy (the only falsy string)")
}


// Using if/else if/else statements, JavaScript code in a script tag that takes the sum of two numbers and prints the corresponding result:

// sum + " is less than -1000";
// sum + " is a negative number";
// sum + " is equal to 0";
// sum + " is larger than 0";
// sum + " is greater than 100";

function sumOfNums(num1, num2){
    if(num1+num2 < -1000){
        console.log(`${num1+num2} is a very small number`)
    }else if(num1+num2 < 0){
        console.log(`${num1+num2} is a negative number`)
    }else if(num1 + num2 == 0){
        console.log(`${num1+num2} is equal to 0`)
    }else if(num1+num2 > 0){
        console.log(`${num1+num2} is greater than 0`)
    }else if(num1+num2 > 100){
        console.log(`${num1+num2} is greater than 100`)
    }
}

sumOfNums(-400, -29)
sumOfNums(-1000, -29)
sumOfNums(56, 92)
sumOfNums(23, 43)
sumOfNums(-1, 1)

function greaterThanFive(num1, num2){
    if(num1 > 5 && num2 > 5){
        console.log(true)
    }else{
        console.log(false)
    }
}

greaterThanFive(3, 6)
greaterThanFive(7, 6)
greaterThanFive(2342, 8)
greaterThanFive(2, 1)

function compare(param1a, param1b, param2a, param2b){
    if(param1a === param1b || param2a === param2b){
        console.log(true)
    }else{
        console.log(false)
    }
}

compare('cat', 'cat', 6, '6')
compare('five', 5, 'dog', 'dawg')
compare(0, false, 'horse', 'horse')
compare("eight", 'eight', 'ate', 'ate')
compare(11, 'eleven', 'four', 'for')
compare('cake', 'cake', 'pie', 'pie')