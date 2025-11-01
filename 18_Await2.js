//Using Await function and handle rejection.

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
       setInterval(() => {
        let a = Math.floor(Math.random()*10)+1;
        if(a > 4) {
            reject("Promise rejected!");
        }
        h1.style.color = color;
        console.log(`Color Changed to : ${color}`);
        resolve("Color Changed!");
        
    }, delay);  
    })
   
}

async function change() {
    try{
        await changeColor("red", 1000);
        await changeColor("orange", 1000);
        await changeColor("green", 1000);
        await changeColor("yellow", 1000);
        await changeColor("blue", 1000);
    }

    catch{
        let num = 2;
        console.log(num+num);
    }
}

change();
