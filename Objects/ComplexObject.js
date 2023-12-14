
let alien ={
    name:"kundan",
    age:20,
    laptop: {
        brand:'apple',
        cpu:"m1 chip",
        ram:"8gb",
        cost:23000
    }
}
console.log(alien);
console.log(alien.age);
console.log(alien.laptop);
console.log(alien.laptop.brand); // brand of laptop inside the object alien.
console.log(alien.laptop.brand.length);

// what if brand is not there inside the laptop object
// for eg take price

// console.log(alien.laptop.price.length); // gives you error.
// so istead of error we can check whether length is there or not.

if(alien.laptop.price != undefined)
{
    console.log(alien.laptop.price.length);
}
else
    console.log("not present");

// instead of doing like this we can use ?
console.log(alien.laptop.price?.length);
// what if laptop1 is not available
console.log(alien.laptop1?.price?.length);
// what if laptop is available and you put ? --> then it just ignores it.
console.log(alien?.laptop?.brand?.length);

// here cost is available but it is number type so there is no error and it shows undefined.
console.log(alien?.laptop?.cost?.length);


// how to delete properites in the object.

delete alien.laptop.cost;
console.log(alien)


