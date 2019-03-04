var choice1= prompt("Enter choice one");
var choice2= prompt("Enter Choice two");

document.querySelectorAll("h3")[0].innerHTML= choice1;
document.querySelectorAll("h3")[1].innerHTML= choice2;
var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage= "images/dice"+randomNumber1+".png";


var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2= "images/dice"+randomNumber2+".png";


var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImage2);

if(randomDiceImage > randomDiceImage2){
  document.querySelector("h1").innerHTML = "🚩 Choice 1 Seems Better";
}else if (randomDiceImage === randomDiceImage2) {
  document.querySelector("h1").innerHTML = "Both Option Looks Nice";
}else{
  document.querySelector("h1").innerHTML = "🚩 Choice 2 Seems Better";
}
