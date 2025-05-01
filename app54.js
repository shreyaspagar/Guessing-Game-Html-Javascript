const maximum = prompt("Enter a maximum number");


const random = Math.floor(Math.random() * maximum) + 1;


let guess = prompt("Guess the number");

while(true) {
    if(guess == "quit") {
        console.log("User Quit");
}


    if(guess == random) {
        console.log("You are right! congrats!! random number was", random);
        break;
    } 
    
    else if(guess < random) {
        guess = prompt("Hint : Your guess was too small. Please try again");
    }

    else {
       guess =  prompt("Hint : Your guess was too large. Please try again");
    }
    
    
}