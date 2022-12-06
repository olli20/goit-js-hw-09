import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
}

refs.startBtn.setAttribute('disabled', '');

let deltaTime = null;
let isActive = false;
let intervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const currentTime = Date.now();
    const choosedTime = selectedDates[0].getTime();
    deltaTime = choosedTime - currentTime;
    console.log('deltaTime: ', deltaTime);

    if (deltaTime <= 0) {
      window.alert("Please choose a date in the future");
      refs.startBtn.setAttribute('disabled', '');
      return;
    } else {

        
      console.log(convertMs(deltaTime));
      const convertetTime = convertMs(deltaTime);
      updateClockFace(convertetTime);
      refs.startBtn.removeAttribute('disabled');
    }
  },
};

refs.startBtn.addEventListener('click', () => {
  if (isActive) {
    return;
  }
  
  isActive = true;

  intervalId = setInterval(() => {

    const convertetTime = convertMs(deltaTime);
    updateClockFace(convertetTime);
    deltaTime -= 1000;
    if (deltaTime <= 0) {
      clearInterval(intervalId);
    return;
  }

  }, 1000);
});

flatpickr("#datetime-picker", options);

const updateClockFace = ({ days, hours, minutes, seconds }) => {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
};

function addLeadingZero (value) {
    return String(value).padStart(2, '0');
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};