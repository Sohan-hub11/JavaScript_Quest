let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
       setInterval(() => {
        h1.style.color = color;
        resolve("Color Changed!");
        reject("Color not Changed");
    }, delay);  
    })
   
}

changeColor("red", 1000)
.then((result) => {
    console.log("Red " + result);
    return changeColor("orange", 1000);
})
.then ((result) => {
    console.log("Orange " + result);
    return changeColor("green", 1000);
})
.then ((result) => {
    console.log("Green " + result);
    return changeColor("yellow", 1000);
})
.then ((result) => {
    console.log("Yellow " + result);
    return changeColor("blue", 1000);
})
.then ((result) => {
    console.log("Blue " + result);
})
.catch ((error) => {
    console.log(error);
});
