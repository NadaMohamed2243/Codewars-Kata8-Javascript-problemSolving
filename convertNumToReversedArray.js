//node convertNumToReversedArray.js
//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
function digitize(n) {
    return n.toString().split('').reverse().map((ele) => Number(ele))
}

console.log(digitize(1234))