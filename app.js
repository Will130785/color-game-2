//Game variables
//circle colors
let colors = [];
//Picked color
let pickedColor;
//Game tracker
let gameover = false;
//Amount of circle tracker
let num = 6
//Amount of circles
let circleAmount = num;

//Get UI Elements
//Get header display
const headerDisplay = document.querySelector(".head-section");
//Get message color display
const colorDisplay = document.querySelector("#color-display");
//Get  new game button
const newGame = document.querySelector("#new-game");
//Get message display
const message = document.querySelector("#game-message");
//Get easy button
const easyBtn = document.querySelector("#easy-btn");
//Get hard button
const hardBtn = document.querySelector("#hard-btn");
//Get circles
const circles = document.querySelectorAll(".circle");


//function to put colors onto circles
placeColors = () => {
    for(let i = 0; i < circleAmount; i++){
            circles[i].style.backgroundColor = colors[i];
    }
};

//Function to generate random colors
generateRandomColor = () => {

    //Save values to variables
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

//Function to pick required colors
pickColors = () => {
    //Loop through circles and for each one push a random color to the colors array
    for(let i = 0; i < circleAmount; i++){
        colors.push(generateRandomColor());
    }

    //select winning color
    let random = Math.floor(Math.random() * circleAmount);
    pickedColor = colors[random];

    //Display RGB value to find
    colorDisplay.textContent = pickedColor;

    //place colors on circles
    placeColors();

}


//Reset Function
resetGame = () => {
    //set amount of circles
    circleAmount = num;
    //Set gameover to false
    gameover = false;
    //Reset colors array
    colors = [];
    //clear message display
    message.innerHTML = "";
    //Set background back to default
    headerDisplay.style.backgroundColor = "rgb(255, 192, 20)";
    //Pick new colors
    pickColors();
}

//Initiate game
pickColors();

//Event listener for circles
circles.forEach((circle, index) => {
    //Add event listener to each circle
    circle.addEventListener("click", e => {
        //Check game is still active and only execute code if so
        if(!gameover) {
            //Create clicked color variable
            let clickedColor = colors[index];
            //Check if clicked color is equal to picked clolor
            if(clickedColor === pickedColor){
                //Remove loser class
                message.classList.remove("loser");
                //Add winner class
                message.classList.add("winner");
                //Display win text
                message.textContent = "You Win!";
                //Change background color of heading
                headerDisplay.style.backgroundColor = pickedColor;
                //Set gameover to true
                gameover = true;

            } else {
                //Add loser class
                message.classList.add("loser");
                //Add loser message
                message.textContent = "Wrong, pick again!";
                //Hide clicked circle
                circles[index].style.backgroundColor = "rgb(43, 43, 43)";
        }
    }
    

    });

});


//Event listener for reset button
newGame.addEventListener("click", () => {
    resetGame();
})

//Event listener for easy button
easyBtn.addEventListener("click", () => {
    //Set amount of circles to three
    num = 3;
    //Reset game
    resetGame();
    //Test to see if circles have a color assigned and if not hide them
    for(let i = 0; i < circles.length; i++){
        if(colors[i]) {
            circles[i].style.display = "block";
        } else {
            circles[i].style.display = "none";
        }
    }

});

//Event listener for hard button
hardBtn.addEventListener("click", () => {
    //Set amount of circles to three
    num = 6;
    //Reset game
    resetGame();
    //Test to see if circles have a color assigned and if not hide them
    for(let i = 0; i < circles.length; i++){
        if(colors[i]) {
            circles[i].style.display = "block";
        } else {
            circles[i].style.display = "none";
        }
    }

})