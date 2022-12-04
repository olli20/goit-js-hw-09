// const date1 = Date.now();
// console.log(date1);
// setTimeout(() => {
//     const date2 = Date.now();
//     console.log(date2);
//     console.log(date2 - date1);
// }, 3000);

const refs = {
    clockface: document.querySelector('.clock'),
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
}

const timer = {
    intervalId: null,

    isStarted: false,

    start() {
        if (this.isStarted) {
            return;
        };
        const startTime = Date.now();
        this.isStarted = true;

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const timerComponents = getTimeComponents(deltaTime);
            updateClockFace(timerComponents);

        }, 1000);
    },

    stop() {
        clearInterval(this.intervalId);
        this.isStarted = false;
    },

};

refs.startBtn.addEventListener('click', () => {
    timer.start();
    
});

refs.stopBtn.addEventListener('click', () => {
    timer.stop();
});

const updateClockFace = ({ hours, mins, secs }) => {
    refs.clockface.textContent = `${hours}:${mins}:${secs}`;
};

const pad = (value) => {
    return String(value).padStart(2, '0');
}
    
const getTimeComponents = (time) => {
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
}

