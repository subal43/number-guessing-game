let numm
function getrandomint(max)
{
    return Math.floor(Math.random()*max);
}
let ran=getrandomint(100)

do{
    numm= parseInt(prompt("Enter the number :"))
    console.log("your enter value is : "+numm)
    if(numm>ran)
    {
        console.log("gusse lower")
    }
    else if(numm<ran)
    {
         console.log("gusse big")
    }
    else
    {
        console.log("you win")
        break;
    }
}while(numm>0);