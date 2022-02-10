var paymentX = "bKash";
var paymentY = "CreditCard";
var paymentMethod = "Credit Card";

//console.log("Please enter initial price: ");

var initialPrice = 350;
if(initialPrice >= 500){
    //console.log("Please enter payment method: ");
    if(paymentMethod === paymentX){
        var totalBkash = (initialPrice - (initialPrice * (5/100)) + 50);
        console.log("Total Bill with bKash: " + totalBkash);
    }
    else{
        var totalCredit = (initialPrice - (initialPrice * (7/100)) + 50);
        console.log("Total Bill with Credit Card: " + totalCredit);
    }
}
else{
    console.log("Your payment is " + initialPrice +  " which is below 500 and you are not getting any discount.");
}