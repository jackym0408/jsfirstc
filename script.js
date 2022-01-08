//very easy

let num1 = 6;
let num2 = 2; 

console.log("The difference between 6 and 2 is " + (num1-num2));

//easy

let name1 = "Seth";
let name2 = "Alexander";

console.log("The name Alexander is longer than Seth by "+ (name2.length - name1.length)+ " characters");

//medium 

let input = prompt("Enter a word to see if you're yelling, whispering, or neither: ");

if ( input == input.toUpperCase()) {
    alert("WHY ARE YOU YELLING?");
}
    else if ( input == input.toLowerCase()){
        alert("thanks for whispering !!");
}
    else {
        alert("Neither Yelling Or Whispering");
    }
//hard

let x = 10; 

let y = 5;

function add (){
    return x + y
}

function subtract (){
    return x - y;
}

function multiply (){
    return x * y;
}

function divide (){
    return x / y

}

//very hard

let userNum1 = prompt("enter a number: ");
let userOp = prompt("Enter an operator such as =, -, /, or *");
let userNum2 = prompt("enter another number");

//convert user numbers from string to numbers
//might need to change function names :/

if (userOp === "+"){
    function addition(){
        return  parseInt(userNum1) + parseInt(userNum2)
    }
}

    else if(userOp === "-"){
        function sub(){
            return parseInt(userNum1) - parseInt(userNum2)
        }
    }

    else if(userOp === "*"){
        function multi(){
            return parseInt(userNum1) * parseInt(userNum2)
        }
    }

    else if(userOp === "/"){
        function div(){
            return parseInt(userNum1) / parseInt(userNum2)
        }
    }


//coding challenge from class disregard 

let num3 = 7; 

if (num3 % 2 === 0 ){
    console.log("the number is even");
}
else{
    console.log("thats an odd number")
}

