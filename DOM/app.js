//Selecting Elements -->

//console.dir(document);

document.getElementById("description"); //get element by Id.
//console.dir(document.getElementById("description")); //to get id as object.

document.getElementsByClassName("oldImg"); //get element by class name.

let oimg = document.getElementsByClassName("oldImg");
for( let i = 0; i< oimg.length; i++){
    //console.log(oimg[i]);
    //console.log(oimg[i].src);
    oimg[i].src="assets/spiderman_img.png";
    console.log(`The value of old img is changed to. ${i}`);

}

document.getElementsByTagName("p"); //get element by tag name.
document.getElementsByTagName("p")[1].innerText="aba";

