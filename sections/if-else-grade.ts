/* Realizar un programa que muestre la nota del alumno como:
A B C D E F
donde: 
A >= 90
B >= 80
C >= 70
D >= 60
E >= 50 */ 
 import let grade: number = 30;

 if (grade >= 90) {
    console.log('La Nota del Alumno es A');}
else if (grade >= 80 && grade < 90) {
    console.log('La Nota del Alumno es B');}
else if (grade >= 70 && grade < 80) {
    console.log('La Nota del Alumno es C');}
else if (grade >= 60 && grade < 70) {
    console.log('La Nota del Alumno es D');}
else if (grade >= 50 && grade < 60) {
    console.log('La Nota del Alumno es E');}
else if (grade < 50 && grade >= 0) {
    console.log('La Nota del Alumno es F');}




