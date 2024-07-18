//You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
    var sum=0;
    // for (let index = 0; index < arr.length; index++) {
    //     const element = arr[index];
    //     if(element>0)
    //     {
    //         sum+=element
    //     }
    // }
    // return sum
    //or
    return arr.filter((x)=> x>0).reduce((acc,cur)=> acc+cur,0)
}

console.log(positiveSum([1,2,-3,7,10]));
