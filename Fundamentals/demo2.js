
let num1=true
let num2=false
let result = num1+num2
console.log(result)

console.log(4*2)
console.log(4**2)
console.log(6<6)
console.log(3+("can">"Pen"))
console.log(true=="k") // i think this should be true.

console.log((23>3)&&(3>2))
console.log(((2>3)||(3>2)))
console.log(!((23>3)&&(3>2)))

// check whether num is even or odd

let num=23

if(num%2==0)
    console.log("even")

else
{
    console.log("odd")
}

let resu =( (num%2==0) ? "even":"odd")
console.log(resu)

num1=23
num2=45;
console.log("the addition of num1: "+num1+" and num2: "+num2+" is "+(num1+num2));
// this is concatenation but the best way to write this is to use template literal
console.log(`the additon of ${num1} and ${num2} is ${num1+num2}`);



