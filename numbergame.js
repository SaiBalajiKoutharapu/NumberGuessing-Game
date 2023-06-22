const hint = document.getElementById("hint");
const noofguessesref = document.getElementById("no-of-guesses");
const guessednumref = document.getElementById("guessed-nums");
const restartbutton = document.getElementById("restart");
const guessinput = document.getElementById("guess");
const game = document.getElementById("game");
const checkbutton = document.getElementById("check-btn");
const wrapper = document.getElementsByClassName("input-wrapper");

let answer ,noofguesses ,guessednumsArr;


const play = () =>
{
    const userguess = guessinput.value;
    if(userguess <1 || userguess > 100 || isNaN(userguess))
    {
        alert('enter the number between 1 to 100');
        return;
    }
    guessednumsArr.push(userguess);
    noofguesses += 1;

    if(userguess != answer)
    {
        if(userguess < answer)
        {
            hint.innerHTML = "Too low. Guess again";
        }
        else
        {
            hint.innerHTML = "Too high .Try again";
        }
        noofguessesref.innerHTML = 'No of guesses :'+ noofguesses;
        guessednumref.innerHTML = 'Guessed numbers are: '+ guessednumsArr.join(",");

        hint.classList.remove("error");
        setTimeout(() => 
        {
            hint.classList.add("error");
        },10);
    }

    else{
        hint.innerHTML ="Congratulations <br/> The number is "+answer+".<br/> You guessed number in "+noofguesses +" attempt";
        checkbutton.addEventListener("click", play);
        hint.classList.add("success");
        hint.style.display="block";
        restartbutton.style.display = "block";
        
    }
};

checkbutton.addEventListener("click",play);

const init = () => {
    console.log("Game started");
    answer = Math.floor(Math.random() * 100) + 1;
    console.log(answer);
    noofguesses = 0;
    guessednumsArr =[];
    noofguessesref.innerHTML = "No of Guesses are : 0";
    guessednumref.innerHTML = "Guessed Numbers are : None";
    guessinput.value="";
    hint.classList.remove("success","error");
};


guessinput.addEventListener("keydown",(event) => {
    if(event.key == "Enter"){
        play();
    }
})

restartbutton.addEventListener("click" , () => {
    restartbutton.style.display = "none";
    hint.innerHTML = "";
    hint.classList.remove("success");
    init();
});


window.addEventListener("load", init);



