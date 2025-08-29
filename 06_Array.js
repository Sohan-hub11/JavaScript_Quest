let students = ["Sohan", "Sintu", "Banti"];
let marks = [88, 100, 99];
let info = ["sohan", 50, 5.10];

//practice question on basic Array Methods.
    // given Array,
    // start = ["january", "july", "march", "august"]
    // final = ["july", "june", "march", "august"]

let start = ["january", "july", "march", "august"];
let rem = start.shift();
rem = start.shift();
//console.log(start);
let add = start.unshift("june");
add = start.unshift("july");
let final = [];
final = start;
//console.log(final);

//practice question on Array Methods.
    // given Array,
    // start = ["january", "july", "march", "august"]
    // final = ["july", "june", "march", "august"]
    //do the operation using splice

let months = ["january", "july", "march", "august"];
months.splice(0, 2, "july","june");
//console.log(months);

//practice question.
    //lang = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];

let lang = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
let index = lang.reverse().indexOf("javascript");
//console.log(index);

//Constant Array:- Array with constant variable will be fixed cannot be changed ,means 
//                 the reference address cannot be change but the value can be added or removed.

const arr = [1, 2, 3];
arr.push(4); //4
//arr (4) [1, 2, 3, 4]
arr.pop(); //4
//arr (3) [1, 2, 3]
//arr = [1, 2, 3]; --error will occur in these as reference of the particular array can not be changed.

//Nested Array:- Multidimensional Arrays.
let nums = [[1,2],[3,4],[5,6]];
// nums -- (3) [Array(2), Array(2), Array(2)]
// 0
// : 
// (2) [1, 2]
// 1
// : 
// (2) [3, 4]
// 2
// : 
// (2) [5, 6]
// length
// : 
// 3

//Practice question on 2D Array display as a Tic-Tac-Toe Games.
//        X| |O
//         |X|
//        O| |X

let tic = [['X' ,null ,'O'],[null ,'X' , null],['O' ,null ,'X']];
tic[0].splice(1,1,'O'); //to change array[0] 2nd element null-> O