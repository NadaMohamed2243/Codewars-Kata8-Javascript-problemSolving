//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function even_or_odd(number){
    if(number%2===0){
        return "Even"
    }
    else{
        return "Odd"
    }
    // return number%2===0? "Even":"Odd";
}

console.log(even_or_odd(30));
console.log(even_or_odd(15));