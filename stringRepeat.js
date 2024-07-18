//node stringRepeat.js
//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr(n, s) {
    let newstring = ''
    for (let index = 0; index < n; index++) {
        newstring += s;
    }
    return newstring;
    //or
    //return s.repeat(n);
}

console.log(repeatStr(8, '*'));