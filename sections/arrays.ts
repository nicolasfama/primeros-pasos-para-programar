/*import { printMultiplicationTable } from "./helpers/print-Multiplication-Table";

printMultiplicationTable(3,5);*/


export let employees: string[] = ["Alice", "Bob", "Charlie"];
export let salaries: number[] = [1500, 2400, 3200];
//let flowers: string[] = ['Rosa', 'Girasole','Lirio', 'Tulipán'];



/*if (flowers[0]) {
    console.log(flowers[0]);
}
if (flowers[1]) {
    console.log(flowers[1]);
}
if (flowers[2]) { 
    console.log(flowers[2]);
}
if (flowers[3]) {
    console.log(flowers[3]);
}
if (flowers[4]) {
    console.log(flowers[4]);
}*/

/*for (let i = 0; i < flowers.length; i++) {
    if (flowers[i]) {
        console.log(flowers[i]);
    }
}*/

for (let i = 0; i < employees.length; i++) {
    if (employees[i]) {
        console.log(`${employees[i]} tiene un salario de $${salaries[i]}`);
    }
}