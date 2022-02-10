
//object declaration
var exampleName = {

    fullName : "Sumon Hasan",
    age : 25,
    address : "Tangail",
    job : "Private Job" 
}
//print all value
console.log(exampleName);

//print one element
console.log(exampleName.fullName);
console.log(exampleName["job"]);

//adding a new value
exampleName.zipCode = 5530;
console.log(exampleName);

//changing a value
exampleName.job = "Student";
console.log(exampleName);

//adding function 

exampleName.welcomeMsg = function(){
    console.log("Hello");
}

//calling a function
exampleName.welcomeMsg();

for(item in exampleName){
    console.log(item);
} 

//array within object

var objectArray = {
    normal : "Normal Item",
    stdName : ["Riam", "Hasan", "Shazid"],
    stdAge : [10, 20, 30]
}

console.log(objectArray.stdName[2]);

//object within array
var objectInArray = [
    "Riam" , {
        fName : "Nahid",
        nAge : 25,
        nJob : "Govt. Job"
    },
    "Dhaka"
]

console.log(objectInArray[1].fName);
console.log(objectInArray[1].nJob);

