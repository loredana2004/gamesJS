/*
RREGULLAT E LOJËS:

- Loja ka 2 lojtarë, që luajnë me rradhe
- Në rradhen e tij, një lojtar hedh një zar sa herë që dëshiron. Çdo rezultat shtohet në rezultatin final te tij.
- POR, nëse faqja e zarit te lojtarit bie 1, i gjithë rezultati i tij i rradhes humbet (rezultati final nuk ndryshon). 
Pas kësaj, është radha e lojtarit tjetër
- Lojtari mund të zgjedhë 'Hold', që do të thotë se rezultati i tij i rradhes shtohet në rezultatin e tij final. 
Pas kësaj, është radha e lojtarit tjetër
- Lojtari i parë që arrin 100 pikë në rezultatin final fiton lojën

*/

/* rezultati i lojes eshte nje tabele me dy elemente; 
score[0] ruan piket e lojtarit te pare dhe score[1] pike e lojtarit te dyte 
activePlayer =0 rradhe e ka lojtari i pare, 1 rradhen e ka i dyti.
gameEnded = false loja vazhdon, gameEnded = true loja ka mbaruar
roundScore ruan piket e radhes per lojtari qe ka radhen
*/

let score, activePlayer, gameEnded, roundScore; 

newGame();

document.querySelector(".btn-new").addEventListener(

"click", newGame)

document.querySelector(".btn-roll").addEventListener("click",

()=>{
    if(!gameEnded){ // do not play a finished game
    round = Math.floor(Math.random()*6)+1;
    dice = document.querySelector(".dice");
    dice.src="dice-"+round+".png";
    dice.style.display="block";
    if(round!==1){ // keep going
        roundScore+=round;
        document.querySelector("#current-"+activePlayer).textContent=roundScore;

    }
    else{ // bad luck dice = 1
        roundScore=0;
        document.querySelector("#current-"+activePlayer).textContent="0";
        activePlayer = (activePlayer+1)%2;
        document.querySelector(".dice").style.display="none";
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
    }
    }
}
);

document.querySelector(".btn-hold").addEventListener("click",

function(){
if(!gameEnded){

    score[activePlayer] += roundScore;
    document.querySelector("#score-"+activePlayer).textContent=score[activePlayer];

    if(score[activePlayer] >=100){

        gameEnded=true;
        document.querySelector("#name-"+activePlayer).textContent="Winner!";
        document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
        document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
    }
    else {
        roundScore=0;
        document.querySelector("#current-"+activePlayer).textContent="0";
        activePlayer = (activePlayer+1)%2;
        document.querySelector(".dice").style.display="none";
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
    }

}
}

);
function newGame(){
score = [0, 0];
activePlayer=0;
gameEnded = false;
roundScore =0;
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.querySelector("#current-0").textContent="0";
document.querySelector("#current-1").textContent="0";
document.querySelector(".dice").style.display="none";
document.querySelector(".player-0-panel").classList.add("active");
document.querySelector(".player-1-panel").classList.remove("active");
document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");
document.getElementById("name-0").textContent ="Player 1";
document.getElementById("name-1").textContent ="Player 2";
}
