var diceValue = Math.floor(Math.random() * 6) + 1;
if (diceValue === 1)
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
else if (diceValue === 2)
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
else if (diceValue === 3)
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
else if (diceValue === 4)
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
else if (diceValue === 5)
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
else
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");

var diceValue2 = Math.floor(Math.random() * 6) + 1;
if (diceValue2 === 1)
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
else if (diceValue2 === 2)
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
else if (diceValue2 === 3)
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
else if (diceValue2 === 4)
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
else if (diceValue2 === 5)
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
else
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");

if(diceValue>diceValue2){
    document.querySelector(".container h1").innerHTML= "🚩 Player 1 Wins!";
}
else if(diceValue<diceValue2){
    document.querySelector(".container h1").innerHTML= "Player 2 Wins! 🚩";
}
else{
    document.querySelector(".container h1").innerHTML= "Match Draws!";
}
