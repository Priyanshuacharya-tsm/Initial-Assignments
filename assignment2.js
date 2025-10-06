let num1=10;
let num2=30;
const oper="/";
switch(oper){
    case "+":
        console.log(num1+num2);
        break;
    case "-":
        console.log(num1-num2);
        break;
    case "*":
        console.log(num1*num2);
        break;
    case "/":
        console.log(num1/num2);
        break;
    default:
        console.log("ONLY +, -, *, / are allowed");
        break;
}