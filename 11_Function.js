let sum = function(a,b){
    return a+b;
}
//console.log(sum(2,4));

/****************************************************** */
function avg(a,b,c){
    console.log((a+b+c)/3);
}
//avg(2,4,6);

/***************************************************** */
function printTable(n){
    for(let i=1; i<=10; i++){
        console.log(`${n} x ${i} : ${n*i}`);
    }
}
//printTable(2);

/***************************************************** */
let sum1 = 0;
function add(n){
    for(let i=1; i<=n; i++){
        sum1 += i;
    }
    return sum1;
}
//console.log(add(5));

/***************************************************** */
//Higher Order Function.(takes one or more functions as arguments).

let greet = function(){
    console.log("Hello");
}

function multipleGreet(f, n){
    for(let i=0; i<n; i++){
        f();
    }
}
//multipleGreet(greet,5);

//Higher Order Function.(Returns a function).

function oddOrEvenFactory(request){
    if(request == "Odd"){
        return function(n){
            console.log(!(n%2 == 0))
        }
    }
    else if(request == "Even"){
        return function(n){
            console.log(n%2 == 0)
        }
    }
    else {
        console.log("Wrong Request");
    }
}

let request = "Odd";
let func = oddOrEvenFactory(request);
console.log(func(11));