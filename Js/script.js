const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const textOver = document.querySelector('.text-over')
const floor = document.querySelector('.floor');


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

let loop;
let count = 0;

function startLoop(){
const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;
    const floorPosition = floor.offsetLeft;

    if(pipePosition <= 120 && marioPosition < 85 && pipePosition > 0){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './Images/game_over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;
        
        floor.style.animation = 'none';
        floor.style.left = `${floorPosition}`

        clearInterval(loop)

        resetButton.style.display = 'block';
        textOver.style.display = 'block';

    }

    else {
        count++;
        document.getElementById("pontuation").textContent ="Score: " + Math.floor(count / 5);
    };
    
} ,10);
}

function resetLoop(){
    clearInterval(loop);
    count = 0;
    pipe.style.left = '';
    pipe.style.animation = 'pipe-animation 2s infinite linear';

    clouds.style.left = '';
    clouds.style.animation = 'clouds-animation 10s infinite linear';

    mario.src = './Images/mario_walking.gif';
    mario.style.width = '150px';
    mario.style.bottom = '0px';
    mario.style.marginLeft = '0px';
    mario.style.animation = '';

    floor.style.animation = 'floor-animation 5.5s linear infinite';
    floor.style.left = '';

    resetButton.style.display = 'none';
    textOver.style.display = 'none';

    
    
    loop = startLoop()
}

startLoop();

window.addEventListener('keydown', jump);

const resetButton = document.getElementById('button-reset');
resetButton.addEventListener('click', resetLoop);
