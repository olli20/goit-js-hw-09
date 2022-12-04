const refs = {
    clockface: document.querySelector('.clock'),
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
}

const updateClockFace = ({ hours, mins, secs }) => {
    refs.clockface.textContent = `${hours}:${mins}:${secs}`;
};

class Timer {
    constructor({ onTick }, ) {
        this.intervalId = null;
        this.isStarted = false;
        this.onTick = onTick;

        this.init();
    }

    init() {
        const time = this.getTimeComponents(0);
        this.onTick(time);
    }
    
    start() {
        if (this.isStarted) {
            return;
        };

        const startTime = Date.now();
        this.isStarted = true;

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const time = this.getTimeComponents(deltaTime);
            
            this.onTick(time);
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.isStarted = false;
        const time = this.getTimeComponents(0);
        this.onTick(time);
    }

    getTimeComponents(time) {
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return { hours, mins, secs };
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }

};

const timer = new Timer({
    onTick: updateClockFace,
});

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

 
