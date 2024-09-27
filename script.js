let randomnumber=parseInt(Math.random()*100+1);
const userinput =document.querySelector('#guessfield');
const submit=document.querySelector('#subt');
const guessslot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const loworhi=document.querySelector('.loworhi');
const startover=document.querySelector('.resultParas');

const p=document.createElement('p');
let preguess=[];
let numguess=1;
let playGame=true;
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userinput.value)
        validateGuess(guess)
    })

}
 function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a vaild number')
    } else if (guess<1) {
        alert('Please enter a number more than 1')
        
    }
     else if (guess>100) {
        alert('Please enter a number less than 100')
        
    }
    else{
        preguess.push(guess)
        if(numguess===11){
            displayMessage(`game over number was ${randomnumber}`)
        
            endgame()
        }
        else{
            displayguess(guess)
            checkguess(guess)
        }
    }
 }
function checkguess(guess){
    if (guess===randomnumber) {
        displayMessage(`you guessed it right`)
        endgame()
        
    }else if(guess<randomnumber){
        displayMessage(`Number is too low`)
    }
     
    else if(guess>randomnumber){
        displayMessage(`Number is high`)
    }
     
}
function displayguess(guess){
    userinput.value=''
    guessslot.innerHTML+=`${guess}, `
    numguess++;
    remaining.innerHTML=`${11-numguess}`

}
function displayMessage(message){

loworhi.innerHTML=`<h2>${message}</h2>`;
}
function endgame(){
userinput.value=''
userinput.setAttribute('disabled','');
p.classList.add('button');
p.innerHTML=`<h2 id="newGame">start new Game</h2>`;
startover.appendChild(p);
playGame=false;
newGame();
}
function newGame(){
   const newGamebutton= document.querySelector('#newGame')
   newGamebutton.addEventListener('click',function(e){
    randomnumber=parseInt(Math.random()*100+1);
    preguess=[]
    numguess=1
    guessslot.innerHTML=''
    remaining.innerHTML =`${11-numguess}`
    userinput.removeAttribute('disabled')
    startover.removeAttributeNode(p);
    playGame=true
   })
}
 