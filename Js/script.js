const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(()=>{
    const pipe_position = pipe.offsetLeft;
    const mario_position = +window.getComputedStyle(mario).bottom.replace('px', '');
    const clouds_position = clouds.offsetLeft;
    
    if(pipe_position <= 120 && mario_position < 85 && pipe_position > 0){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipe_position}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${mario_position}px`;

        mario.src = './Images/game_over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clouds.style.animation = 'none';
        clouds.style.left = `${clouds_position}px`;
        

        clearInterval(loop)
    };

} ,10);

window.addEventListener('keydown', jump);
