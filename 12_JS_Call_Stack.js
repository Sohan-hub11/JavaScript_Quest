//JS Call Stack.

function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

three();


//In the Stack-- it stores :
//three() -> two() -> one() -> one() -> one()