//Creation Async Function.

let hello = async () => {
    throw ("404 Page not found");
    return "Hola!"; //returns Promise.
}

hello()
.then((result) => {
    console.log("Promise was resolved ");
    console.log("Result was : " + result);
})
.catch((error) => {
    console.log("Promise was not resolved ");
    console.log("Result was : " + error);
})