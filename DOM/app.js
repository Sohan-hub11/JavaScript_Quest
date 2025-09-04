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

//Query Selectors -->

console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldimg"));
console.dir(document.querySelector("div a"));

console.dir(document.querySelectorAll("h1"));


//Setting Content in Objects

let para = document.querySelectorAll("p");
console.dir(para);
para[1].innerText;
// 'In 1962, with the success of the Fantastic Four, Marvel Comics editor and head writer Stan Lee was casting for a new superhero idea. He said the idea for Spider-Man arose from a surge in teenage demand for comic books and the desire to create a character with whom teens could identify. As with Fantastic Four, Lee saw Spider-Man as an opportunity to "get out of his system" what he felt was missing in comic books. In his autobiography, Lee cites the non-superhuman pulp magazine crime fighter the Spider as a great influence, and in a multitude of print and video interviews, Lee stated he was further inspired by seeing a spider climb up a wall—adding in his autobiography that he has told that story so often he has become unsure of whether or not this is true.'
para[1].innerHTML;
// '\n      In 1962, with the success of the Fantastic Four, Marvel Comics editor and\n      head writer Stan Lee was casting for a new superhero idea. He said the\n      idea for Spider-Man arose from a surge in teenage demand for comic books\n      and the desire to create a character with whom teens could identify. As\n      with Fantastic Four, Lee saw Spider-Man as an opportunity to "get out of\n      his system" what he felt was missing in comic books. In his autobiography,\n      Lee cites the non-superhuman pulp magazine crime fighter the Spider as a\n      great influence, and in a multitude of print and video interviews, Lee\n      stated he was further inspired by seeing a spider climb up a wall—adding\n      in his autobiography that he has told that story so often he has become\n      unsure of whether or not this is true.\n    '
para[1].textContent;
// '\n      In 1962, with the success of the Fantastic Four, Marvel Comics editor and\n      head writer Stan Lee was casting for a new superhero idea. He said the\n      idea for Spider-Man arose from a surge in teenage demand for comic books\n      and the desire to create a character with whom teens could identify. As\n      with Fantastic Four, Lee saw Spider-Man as an opportunity to "get out of\n      his system" what he felt was missing in comic books. In his autobiography,\n      Lee cites the non-superhuman pulp magazine crime fighter the Spider as a\n      great influence, and in a multitude of print and video interviews, Lee\n      stated he was further inspired by seeing a spider climb up a wall—adding\n      in his autobiography that he has told that story so often he has become\n      unsure of whether or not this is true.\n    '
para[1].innerText = "My name is Sohan Samanta";
// 'My name is Sohan Samanta'
para[1].innerHTML = "My name is <b>Sohan Samanta</b>";

let heading = document.querySelector("h1");
heading.innerHTML
//'Spider Man'
heading.innerText
//'Spider Man'
heading.innerHTML = `<u>${heading.innerText}</u>`; //changing th text to underlines.


//Manipulating Attributes -->

let img=document.querySelector("img");
//'mainImg'
img.getAttribute("id");
img.setAttribute("id","spiderman");


//Manipulating Style -->

let heading = document.querySelector("h1");
heading.style;
//CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
heading.style.color = "red"; //changes to red.
//'red'
heading.style.color = "blue"; //changes to blue.
//'blue'

