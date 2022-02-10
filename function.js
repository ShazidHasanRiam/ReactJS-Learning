//declaring function
function funtionName(){
    console.log("I am a Function");
}

var functionName2 = function(){
    //statement
}

//calling a function
funtionName();

//example
function sumFunction(a,b){
    var sum = a + b;
    return sum;
}
console.log(sumFunction(2,9));
console.log(sumFunction(7,13));

//another example
function myName (name, age){
    console.log("My name is " + name + " and I am " + age + " years old.");
}
myName("Shazid", 25);

//function in function
function callMyName (name, callback){
    var myAge = 25;
    callback(myAge);
    console.log("This is fun Mr." + name);
}

function hello (age){
    console.log("Passed an argument and my age is: " + age);
}

callMyName(" Shazid Hasan", hello);

//return function from another function
function welcomeMsg(name){
    console.log("Welcome Mr. " + name);
    return function options (menu){
        console.log("Do you like " + menu + " Mr. " + name + "?");
    }
}

welcomeMsg("Shazid Riam")("Tea");