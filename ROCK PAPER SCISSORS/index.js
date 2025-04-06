const choices=["rock","paper","scissors"];
const playerdisplay =document.getElementById("palyerdisplay");
const compdisplay =document.getElementById("compdisplay");
const resultdisplay =document.getElementById("resultdisplay");
const playerscoredis=document.getElementById("playerscoredis");
const compscoredis=document.getElementById("computerscoredis");
let playerscore=0;
let compscore=0;

function playgame(palyerchoice){

    const compchoice =choices[Math.floor(Math.random()*3)];
let result="";
    
if(palyerchoice===compchoice){
    result="ITS A TIE!";

}
else{
    switch(palyerchoice){
        case "rock":
            result=(compchoice ==="scissors")?"YOU WIN!":"YOU LOSE!"
        break;
        case "paper":
            result=(compchoice ==="rock")?"YOU WIN!":"YOU LOSE!"
        break;
        case "scissors":
            result=(compchoice ==="paper")?"YOU WIN!":"YOU LOSE!"
        break;
    }
}

playerdisplay.textContent=`player : ${palyerchoice}`;
compdisplay.textContent=`comp : ${compchoice}`;
resultdisplay.textContent=result;

resultdisplay.classList.remove("greentext","redtext");
switch(result){
    case"YOU WIN!":
    resultdisplay.classList.add("greentext");
    playerscore++;
    playerscoredis.textContent=playerscore;
    break
    case"YOU LOSE!":
    resultdisplay.classList.add("redtext");
    playerscore++;
    compscoredis.textContent=playerscore;
     break
}
}
