import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
  startBtn: document.querySelector('button[data-start]'),
}

refs.startBtn.setAttribute('disabled', '');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentTime = Date.now();
    const choosedTime = selectedDates[0].getTime();
    const deltaTime = choosedTime - currentTime;
    console.log('currentTime: ', currentTime);
    console.log('choosedTime: ', choosedTime, selectedDates[0]);
    console.log('deltaTime: ', deltaTime);

    if (deltaTime <= 0) {
      window.alert("Please choose a date in the future");
      refs.startBtn.setAttribute('disabled', '');
      return;
    } else {
      refs.startBtn.removeAttribute('disabled');
    }
  },
};

flatpickr("#datetime-picker", options);


// const updateClockFace = ({ hours, mins, secs }) => {
//     refs.clockface.textContent = `${hours}:${mins}:${secs}`;
// };

// class Timer {
//     constructor({ onTick }, ) {
//         this.intervalId = null;
//         this.isStarted = false;
//         this.onTick = onTick;

//         this.init();
//     }

//     init() {
//         const time = this.getTimeComponents(0);
//         this.onTick(time);
//     }
    
//     start() {
//         if (this.isStarted) {
//             return;
//         };

//         const startTime = Date.now();
//         this.isStarted = true;

//         this.intervalId = setInterval(() => {
//             const currentTime = Date.now();
//             const deltaTime = currentTime - startTime;
//             const time = this.getTimeComponents(deltaTime);
            
//             this.onTick(time);
//         }, 1000);
//     }

//     stop() {
//         clearInterval(this.intervalId);
//         this.isStarted = false;
//         const time = this.getTimeComponents(0);
//         this.onTick(time);
//     }

//     getTimeComponents(time) {
//         const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//         const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//         const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

//         return { hours, mins, secs };
//     }

//     pad(value) {
//         return String(value).padStart(2, '0');
//     }

// };

