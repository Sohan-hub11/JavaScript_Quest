let url = "https://catfact.ninja/fact";

/* API fetching --

fetch(url)
    .then((res) => {
        console.log(res);
        res.json().then((data) => {
            console.log(data);
        })
    })
    .catch((err) => {
        console.log("Error : " + err);
    });

*/

// API fetching with async and awit function.

async function getfacts() {
    try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);

    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log(data2.fact);
    } 
    catch(e) {
        console.log("Error - " + e);
    }

    console.log("Bye");
 
}