var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomImage = "images/dice" + randomNumber1 + ".png";
var randomImage1 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImage);
document.querySelectorAll("img")[1].setAttribute("src", randomImage1);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🎈Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🎈";
}
else{
  document.querySelector("h1").innerHTML = "It's a Draw!🤼‍♂️";
}

document.querySelector("button").addEventListener("click", function(){
  location.reload();
});
