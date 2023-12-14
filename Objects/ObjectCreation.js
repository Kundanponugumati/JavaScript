
let alien ={};
console.log(typeof alien);

// assigning properties to the object.

alien = {
    name:"kundan",
    age:23,
    tech:"Java"
}

console.log(alien)
console.log(alien.name,alien.age)
console.log(alien['name'],alien['tech'])


let input="ramarao" // assume we are taking input from user.
let aliens ={
    name:input,
    age:21,
    tech:"front end",
    'hadavidi candidate':"karthik"
}
console.log(aliens["hadavidi candidate"],aliens['name'])
