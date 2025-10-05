// Write a JavaScript program to get the first n elements of an array. [n can be any positive number].

arr = [7, 9, 0, -2];
n = 3;
let ans = arr.slice(0,n)
//console.log(ans)

// Write a JavaScript program to get the last n elements of an array.[n can be any positive number].
let ans1 = arr.slice(arr.length - n)
console.log(ans1)
