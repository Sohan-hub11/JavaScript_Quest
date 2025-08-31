//Creation of Object Literals -->

const student = {  //Object are generally stored as a const keyword to keep the reference id unique.
    name : "Sohan",
    age : 20,
    marks : 7.6,
    city : "Kolkata"
};


//Creating Post (like Twitter/Thread) -->

const post ={
    username : "ig._.itz_so_han11",
    content : "it is my first post..",
    likes : 50,
    reposts : 2,
    tags : ["@aesthetic","@1stpost"]
};

//Get values -->

student["name"];
student.age

let prop =post["reposts"]; //storing the value of repost count into prop.
//console.log(prop);

//Add/Update Values -->

student.city = "Delhi";
student.gender = "Male";
student.marks = "A";

delete student.marks; //to remove a key.

//Nested Object -->

const classinfo = {
    sohan : {
        age : 20,
        marks : 7.6
    },
    sintu : {
        age : 21,
        marks : 8.08
    },
    banti : {
        age : 22,
        marks : 8.33
    }
};


//To Generate a Random Number (1 to 10) -->

let num = Math.random(); //Step 1
num = num * 10;          //Step 2
num = Math.floor(num);   //Step 3
num = num + 1;           //Step 4
//console.log(num);

let num1 = Math.floor(Math.random() * 10) + 1;  //in one line.
