// chapters 35-38(FUNCTION):-

// Q1
// function day(){
// var date = new Date();
// console.log(date);
// }
// day();

// Q2
// function greetUser(firstName,lastName){ 
//     var fullName = firstName + " " + lastName; 
//     console.log(fullName);
// }
// greetUser(prompt("Enter your First name") , prompt("Enter your Last name"));

// Q3
// function userInput(num1,num2){
//     var sum = num1 + num2;
//     return sum;
    

// }
// var num1 = +prompt("Enter the first number");
// var num2 = +prompt("Enter the second number");

// var result = userInput(num1,num2);

// console.log(`The sum of ${num1} and ${num2} is: ${result}`);

// Q4
// function calc(firstNum,secondNum,operator){
    
//         if(operator === "+")
//             return firstNum + secondNum;
//         else if(operator === "-")
//             return firstNum - secondNum;
//         else if(operator === "%")
//             return firstNum % secondNum;
//         else if(operator === "*")
//             return firstNum * secondNum;
//         else if(operator === "/")
//             return firstNum / secondNum;
// }

// console.log(calc(+prompt("Enter first number"),+prompt("Enter second number"),prompt("Enter any operator")));

// Q5
// function square(num) {
//     return num * num; 
// }


// var result = square(7);
// console.log("The square of 7 is: " + result);

// Q9

//  document.write("<h2>arguments as Values</h2>")
// function calculateArea(width,height){
//     return width * height;
// }
// const area1 = calculateArea(5, 10);  
// document.write("The area of the rectangle is: " + area1); 


// document.write("<h2>arguments as Variables</h2>")
// function calArea(width,height){
//      return width * height;
// }
// var rectWidth = 7;
// var rectHeight= 12;

// const area2 = calculateArea(rectWidth, rectHeight); 
// document.write("The area of the rectangle is: " + area2);  


// Q10
// palindrome program

// function palindrome(word){
//   var reservedWord = "";

//     for(var i = word.length -1 ;i >= 0;i--) {
//       reservedWord += word[i]
//     }


// if (word === reservedWord) {
//     console.log(word, "is palindrome");
// }
//     else {
//         console.log(word, "is not palindrome");
//     }

// }
// palindrome(prompt("Enter a word"));  


// Q11
// function countOccurrences(str, letter) {
//     var count = 0; 

//     for (var i = 0; i < str.length; i++) {

//         if (str[i] === letter) {
//             count++;
//         }
//     }

//     return count;
// }

// var exampleString = 'JSResourceS.com';
// var letterToFind = 'o';
// var occurrences = countOccurrences(exampleString, letterToFind);
// console.log("The letter '" + letterToFind + "' appears " + occurrences + " times.");

                            // -- END --

// chapters38-42(FUNCTIONS, SWITCH STATEMENTS, WHILE... DO-WHILE LOOPS):-

// Q1
// function isLeapYear(year) {
    //     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    //         return year + " is a leap year.";
    //     } else {
    //         return year + " is not a leap year.";
    //     }
    // }
    
    // var year = +prompt("Enter a year:");
    // alert(isLeapYear(year));

// Q2
function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}


const string = prompt("Enter a string:");
const character = prompt("Enter a character to find:");

const index = customIndexOf(string, character);
if (index !== -1) {
    alert(`The character '${character}' is found at index: ${index}`);
} else {
    alert(`The character '${character}' is not found.`);
}
