let favorite = "Avengers";
let guess = prompt("Enter the Movie to guess..");

while(guess != favorite){
    if (guess == "quit"){
        console.log("you quit...");
        break;
    }
    prompt("Wrong...Please try again");
}

if(guess == favorite){
    console.log("Congrats...right guess");
}