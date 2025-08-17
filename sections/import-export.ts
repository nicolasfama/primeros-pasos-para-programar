import { addTwoNumbers } from "../helpers/math-helpers";


/*export function greet(name:string= 'World') {
    console.log("Hello "+ name);
}
//let firstName= 'juan';

//greet(firstName);*/
import { substractTwoNumbers, timesTwoNumbers, divideTwoNumbers } from "../helpers/math-helpers";

    let num1=10;
    let num2=20;

let total1 :number=addTwoNumbers(num1, num2);
let total2:number=substractTwoNumbers(num1, num2);
let total3:number=timesTwoNumbers(num1, num2);
let total4:number=divideTwoNumbers(num1, num2);

console.log('add: ', total1);
console.log('substract: ', total2);
console.log('times: ', total3);
console.log('Divide: ', total4);



