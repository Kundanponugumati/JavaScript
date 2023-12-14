// while loop
// dowhile loop
// for loop


console.log("for loop")
for(let i=0;i<5;i++)
{
    console.log("in for loop");
}
console.log("*************")
console.log("while loop")
let x=0
while(x<5)
{
    console.log("in while loop")
    x++
}
console.log("*************")
console.log("do while loop")
let y=0;
do {
    console.log("in dowhile");
    y++;
} while(y<5)

// nested loop
for(let i= 0;i<5;i++)
{
    for(let j=0;j<5;j++)
    {
        console.log(i+1,j+1);
    }
}

// number divisible by three between 1 to 100

for(let i=1;i<=100;i++)
{
    if(i%3===0)
    {
        console.log(i);
    }
}


// printing each digit individually.
// 123456

let num = 123456;
let num2 =0;
while(num>0)
    {
       num2=num%10+num2*10;
    console.log(num%10)
    num=parseInt(num/10);
    }
    console.log(num2)

