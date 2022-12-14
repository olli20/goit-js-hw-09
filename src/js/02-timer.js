import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
}

const updateClockFace = ({ days, hours, minutes, seconds }) => {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
};

let isTimerGenerated = false;

refs.startBtn.setAttribute('disabled', '');

class Timer {
  constructor({ pickedTime }, timeRender) {
    this.pickedTime = pickedTime;
    this.deltaTime = pickedTime - Date.now();
    this.isActive = false;
    this.intervalId = null;
    this.timeRender = timeRender;

    this.onInit();
  }

  onInit() {
    const startTime = this.convertMs(this.deltaTime);
    this.timeRender(startTime);
  }

  start() {
    if (this.isActive) {
      return;
    }
    
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const convertetTime = this.convertMs(this.deltaTime);
      this.timeRender(convertetTime);
      this.deltaTime -= 1000;
      if (this.deltaTime <= 0) {
        clearInterval(this.intervalId);
      return;
    }
    }, 1000);
  }

  addLeadingZero (value) {
    return String(value).padStart(2, '0');
  }

  convertMs(ms) {
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const days = this.addLeadingZero(Math.floor(ms / day));
      const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
      const minutes = this.addLeadingZero(Math.floor(((ms % day) % hour) / minute));
      const seconds = this.addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

      return { days, hours, minutes, seconds };
  };
}

// налаштування для датапікера
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const pickedTime = selectedDates[0].getTime();

    //перевіряє, чи немає ще таймеру
    if (!isTimerGenerated) {
      if (pickedTime - Date.now() <= 0) {
        window.alert("Please choose a date in the future");
        return;      
      } else {

        // ствоює таймер
        const timer = new Timer({
          pickedTime: pickedTime,
        }, updateClockFace);
        
        // таймер створений
        isTimerGenerated = true;

        // активує кнопку старт
        refs.startBtn.removeAttribute('disabled');

        // запускає метод старт по кліку
        refs.startBtn.addEventListener('click', timer.start.bind(timer));
      };
    };
  },
};

// підключає датапікер
flatpickr("#datetime-picker", options);