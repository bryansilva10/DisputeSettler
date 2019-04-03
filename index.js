///////////////////////
// STEPS FOR RANDOM DICE #1
//////////////////////

//create variable to store "random number" to use later
var randomNumber1 = Math.floor((Math.random() * 6) + 1); //round random number from 1-6

//create variable to store "source of image" using the appropiate image number, use this variable later
var randomImageSource1 = "images/dice" + randomNumber1 + ".png"; //images/dice1.png - images/dice6.png, concatenating.

//"select right element" and index and store into variable
var image1 = document.querySelectorAll("img")[0]; //this always returns an array so we need this notation

//use the variable we created to "set/change the source of the image" using the variable for the source
image1.setAttribute("src", randomImageSource1);

///////////////////////
// STEPS FOR RANDOM DICE #2
//////////////////////

//Same thing as random 1
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//Same as image source 1
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

//Set/Change image source (one step easier than for image 1)
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


////////////////
// ALTER HEADING
////////////////

document.querySelector("h1").innerHTML = "REFRESH PAGE!";

//If player 1 wins
if (randomNumber1 > randomNumber2)
{
  //Change Inner HTML at h1
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
//if player 2 wins
else if (randomNumber2 > randomNumber1)
{
  //Change Inner HTML at h1
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
//if its a draw
else
{
  //Change Inner HTML at h1
  document.querySelector("h1").innerHTML = "Draw!";
}
