//for loops -->

for(let i = 1; i <= 5; i++){
    //console.log(`hello ${i}`);
}

//Nested Loops -->

for(let i = 1; i <= 2; i++){
    //console.log(`Outer Loop ${i}`);
    for(let j = 1; j<=5; j++){
        //console.log(`Inner Loop ${j}`);

    }
    
}

//While Loops -->

let a = 1;
while(a <=5){
    //console.log(`Hola ${a}`);
    a++;
}

//Loops with array -->

let num = [1,2,3,4,5]
for(k = 0; k< num.length; k++){
    //console.log(num[k]);
}

//Loops with Nested Array -->

let nums = [[1,2],[3,4],[5,6]]

for(i = 0; i<nums.length; i++){
    //console.log(nums[i], nums.length);
    for(j=0; j<nums[i].length; j++){
        //console.log(nums[i][j], nums.length);
    }
}

//for-of Loops -->

let fruits = ["mango","apple","litchi","orange"];
for(fruit of fruits){
    //console.log(fruit);
}

//Nested for-of Loops -->

let heroes = [
    ["Iron Man","Captain America","Thor"],
    ["Super man","wonder Woman","Flash"]
]
for(list of heroes){
    for(hero of list){
        //console.log(hero);
    }
}

//Print Odd Numbers 1 to 15

for(let odd = 1; odd<=15; odd+=2){
    //console.log(odd);
}

//Print even Numbers 1 to 15

for(let even = 2; even<=15; even+=2){
    //console.log(even);
}


//Multiplication Table of 5.

for(k = 5; k<=50; k+=5){
    //console.log(k);
}


//Multiplication Table of a number given by the user.

let n = prompt("Enter a number..") //by default changing to strings.
n = parseInt(n); //converting to integers
for(let m = n; m<=n*10; m+=n){
    //console.log(m);

}
