//CallBack Hell.

let h1 = document.querySelector("h1");

function changeColor(color, delay, nextColor) {
    setInterval(() => {
        h1.style.color = color;
        if(nextColor) nextColor();
    }, delay);
}


changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("yellow", 1000, () => {
                changeColor("blue", 1000);
            });
        });
    });
});

/* This is Callback nesting => CallBack hell 
    as we make the JS act as Asysnchronous in nature certain CallBack Hell is encountered.
    To avoid CallBack Hell, we use -> Promises, Async & Await. 
*/
