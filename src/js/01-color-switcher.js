function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
};

// let isStarted = false;
let intervalId = null;

const handleStart = () => {
    // if (isStarted) {
    //     return;
    // };

    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    },
        1000);
    refs.startBtn.setAttribute('disabled', '');
    
    // isStarted = true;
};

refs.startBtn.addEventListener('click', handleStart);

refs.stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    refs.startBtn.removeAttribute('disabled');

    // isStarted = false;
});