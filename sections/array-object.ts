interface Person {
    name: string;
    age: number;
    city?: string; // Optional property
    isActive?: boolean; // Optional property
}



export let fernando: Person = {
    name: "Fernando",
    age: 30,
    city: "Barcelona",
    isActive: true,
}
export let melissa: Person= {
    name: "Melissa",
    age: 28,
    city: "New York",
    isActive: true, // Optional property
    // isActive property is omitted
}
export let john: Person ={
    name: "John",
    age: 35,
    city: "Los Angeles",
    isActive: true,
}
export let juan: Person = {
    name: "Juan",
    age: 40,
    city: "Madrid",
    isActive: true,
}
export let persons : Person [] = [fernando, melissa, john, juan];
for (let i=0; i < persons.length; i++) {
    let person = persons[i];
    console.log(`Name: ${person.name}, Age: ${person.age}`); // Basic info
    }



