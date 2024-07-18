//node sumWithoutTheHighestAndLowestNum.js
//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
//The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
//Mind the input validation.

function sumArray(array) {
    if(array ==null) return 0;
    return array.sort((a,b)=> a-b).slice(1,-1).reduce((acc,ele)=>acc+ele,0)
}

console.log(sumArray([ -6, 20, -1, 10, -12 ]))