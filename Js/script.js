const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const text_over = document.querySelector('.text_over')


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

let loop;
let count = 0;

function start_loop(){
const loop = setInterval(()=>{
    const pipe_position = pipe.offsetLeft;
    const mario_position = +window.getComputedStyle(mario).bottom.replace('px', '');
    const clouds_position = clouds.offsetLeft;
    
    if(pipe_position <= 120 && mario_position < 85 && pipe_position > 0){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipe_position}px`;
        console.log(pipe_position);

        mario.style.animation = 'none';
        mario.style.bottom = `${mario_position}px`;

        mario.src = './Images/game_over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clouds.style.animation = 'none';
        clouds.style.left = `${clouds_position}px`;
        

        clearInterval(loop)

        resetButton.style.display = 'block';
        text_over.style.display = 'block';

    }

    else {
        count++;
        document.getElementById("pontuation").textContent ="Score: " + Math.floor(count / 5);
    };
    
} ,10);
}

function reset_loop(){
    clearInterval(loop);
    count = 0;
    pipe.style.left = '';
    pipe.style.animation = 'pipe_animation 2s infinite linear';

    clouds.style.left = '';
    clouds.style.animation = 'clouds_animation 10s infinite linear';

    mario.src = './Images/mario_walking.gif';
    mario.style.width = '150px';
    mario.style.bottom = '0px';
    mario.style.marginLeft = '0px';
    mario.style.animation = '';

    resetButton.style.display = 'none';
    text_over.style.display = 'none';

    
    console.log('pass');
    loop = start_loop()
}

start_loop();

window.addEventListener('keydown', jump);

const resetButton = document.getElementById('button_reset');
resetButton.addEventListener('click', reset_loop);
