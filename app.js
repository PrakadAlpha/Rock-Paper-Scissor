let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const button = document.getElementById("reset");


function computeChoice(){
    const choice = ['r','p','s'];
    const compChoice = Math.floor(Math.random() * 3);
    return choice[compChoice];
}

function words(letter){
    if(letter == 'r') return 'Rock';
    if(letter == 'p') return 'Paper';
    return 'Scissors';
}

button.addEventListener('click', function(){
    reset();
})

const reset = () => {
    userScore = 0;
    compScore = 0
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `Paper Cover Rock..!`;
}

function win(userChoice, compChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    userChoice_div = document.getElementById(userChoice);
    userSmall = '(user)'.fontsize(3).sub();
    compSmall = '(comp)'.fontsize(3).sub();
    result_p.innerHTML = `${words(userChoice)}${userSmall} beats ${words(compChoice)} ${compSmall}.. You win..!!`
    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
    

}

function lose(userChoice, compChoice){
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    userChoice_div = document.getElementById(userChoice);
    userSmall = '(user)'.fontsize(3).sub();
    compSmall = '(comp)'.fontsize(3).sub();
    result_p.innerHTML = `${words(userChoice)}${userSmall} loses to ${words(compChoice)} ${compSmall}.. You Lose..!!`
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
}

function draw(userChoice, compChoice){
    userSmall = '(user)'.fontsize(3).sub();
    compSmall = '(comp)'.fontsize(3).sub();
    userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${words(userChoice)}${userSmall} and ${words(compChoice)} ${compSmall}.. It's a Draw..!!`
    userChoice_div.classList.add("grey-glow");
    setTimeout(() => userChoice_div.classList.remove("grey-glow"), 300);
    
}


computeChoice();
function game(userChoice){
    const compChoice = computeChoice();
    switch(userChoice+compChoice){
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, compChoice);
                   break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, compChoice);
                   break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, compChoice);
                   break;
    }
}

function main(){
    rock_div.addEventListener('click', () => game('r'));

    paper_div.addEventListener('click',() => game('p'));

    scissor_div.addEventListener('click',() =>game('s'));
}

main();