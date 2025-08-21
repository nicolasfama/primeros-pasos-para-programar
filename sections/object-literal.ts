
export let person = {
    nombre: 'melisa',
    edad: 30,
    isActive: true,
    hobbies: ['reading', 'traveling', 'cooking'],
    toString() {
       let objectString = this.nombre + ' ' + this.adad + ' ' + this.hobbies;
       console.log (objectString);
    }
}

//person.toString();

let car = {
    marca: 'fiat',
    modelo: 'cronos',
    anio: 2022,
    color: 'blanco',

}
let smartTv = {
    marca: 'samsung',
    modelo: 'qled',
    anio: 2023,
    pulgadas: 55,
    isSmart: true,

}
let youtubeVideo = {
    youtuber: 'herrera',
    titulo: 'primeros pasos de programacion',
    length: 3600,
}
console.log(car);
console.log(smartTv);
console.log(youtubeVideo);
