//Promises --

/* It is a Asynchronous Condition -->

function saveDB(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) +1;
    if(internetSpeed > 4){
        success();
    }
    else{
        failure();
    }
}
saveDB("Sohan", () => {
    console.log("Success : Data was saved");
    
    saveDB("Samanta", () => {
        console.log("Success : Data2 was saved");

        saveDB("11", () => {
            console.log("Success : Data3 was saved");
        }, () => {
    
            console.log("Failure: Weak Internet Speed, Data3 can't be saved");
        })
    }, () => {
    
        console.log("Failure: Weak Internet Speed, Data2 can't be saved");
    })
}, () => {
    
    console.log("Failure: Weak Internet Speed, Data can't be saved");
});
*/

//Optimize the above condition using Promises --> 

function saveDB(data) {
    
    return new Promise((resolve, reject) => {
      let internetSpeed = Math.floor(Math.random() * 10) +1;
      if(internetSpeed > 4){
        resolve("Success: Data was Saved");
      }
      else{
        reject("Failure: Weak Connection");
      }
    });
    
}

let request = saveDB("Sohan");
request
    .then((result) => {
        console.log("Promise resolved");
        console.log("Result of promise : " + result);
        //console.log(request);
        return saveDB("Samanta");
    })
    .then((result) => {
        console.log("Data2 was resolved");
        console.log("Result of promise : " + result);
        return saveDB("11");
    })
    .then((result) => {
        console.log("Promise resolved");
        console.log("Result of promise : " + result);
    })
    .catch((error) => {
        console.log("Promise rejected");
        console.log("Error of promise : " + error);
        //console.log(request);
    });