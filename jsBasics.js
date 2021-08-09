//Variables & Data Types


//String Type
var firstName = "Shazid Hasan Riam"

//Boolean Type
var raining = false;

//Number Type
var x = 25;

//find which type of variable
console.log(typeof firstName);

console.log(firstName);
console.log(raining);
console.log(x);

//if 
if (3<5){
    console.log("I am executed");
}

var myName = "Riam";
if (myName === "Riam"){
    console.log("You are allowed");
} 

var myAge = 24;
if (9>10){
    console.log("Good to go");
}

if (myAge >= 24){
    console.log("You are an adult");
}

if (myAge < 24 ){
    console.log("You are not an adult");
}

if (myAge >= 24 && myAge <50){
    console.log("You are an young person");
}


if (myAge > 18){
    console.log("Now you are an adult person.");
} else {
    console.log("You are not enough aged to be an adult");
}


var whatDay = "Sunday";
if (whatDay === "Friday"){
    console.log("The shop is closed on Friday!");
} else if (whatDay === "Thursday"){
    console.log("The shop is partially closed today.");
} else if (whatDay === "Saturday"){
    console.log("Some offices are closed today.");
} else {
    console.log("It is a normal working day.");
}

var testNum = 10;
if(testNum > 1){
    if(testNum >= 10){
        console.log("The number is greater or equal to 10");
    } else {
        console.log("The number is somewhere between 2-10");
    }
}


var weekDay = "Sunday";
switch(weekDay){
    case "Saturday":
        console.log("Saturday! Today is off Day");
        break;

    case "Sunday":
        console.log("Sunday! It is our normal day");
        break;

    case "Monday":
        console.log("Monday! It is our normal day");
        break;

    case "Tuesday":
        console.log("Tuesday! It is our normal day");
        break;

    case "Wednesday":
        console.log("Wednesday! It is our normal day");
        break;

    case "Thursday":
        console.log("Thursday! It is our normal day");
        break;

    case "Friday":
        console.log("Friday! We are closed today!");
        break;

    default:
        console.log("Its not even a day!");
}