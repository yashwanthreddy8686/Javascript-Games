const squares = document.querySelectorAll('.square');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score')

let result = 0;
let hitPosition;
let currentTime = timeLeft.textContent;

function randomSquare(){
    squares.forEach(className => {
        className.classList.remove('mole');
    })
    let randomPosition = squares[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole')
    hitPosition = randomPosition.id;
}

squares.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition){
            result++;
            score.textContent = result;
        }
    })
})

function moveMole(){
    let timerId = null;
    timerId = setInterval(randomSquare,1000);
}

moveMole();

function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime === 0){
        clearInterval(timerId);
        alert('Your game is over'+ score);
    }
}

let timerId = setInterval(countDown,1000);

