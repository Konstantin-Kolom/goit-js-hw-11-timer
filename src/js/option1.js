//////////////// Первый Вариант
// Переменные
const refs = {
   clockTimerDay: document.querySelector('[data-value="days"]'),
   clockTimerHours: document.querySelector('[data-value="hours"]'),
   clockTimerMins: document.querySelector('[data-value="mins"]'),
   clockTimerSecs: document.querySelector('[data-value="secs"]'),
};

const endTime ={
  targetDate: new Date('Jul 22, 2021, 8:10:00'),
};

// Счетсик
class Timer {
   
};

const timer = {
   start() {
      const startTime = endTime.targetDate;
      console.log(startTime);

      setInterval(() => {
         const currentTime = Date.now();
         const deltaTime = (currentTime - startTime) * -1;
         const { days, hours, mins, secs } = getTimeComponents(deltaTime);
         if (currentTime === startTime) {
            stopUpdateClockTimer()
            return 
          };
         
         updateClockTimer({ days, hours, mins, secs })
         console.log(`${days}:${hours}:${mins}:${secs}`);
      }, 1000);
   }
}

timer.start()

// Вывод в HTML 
function updateClockTimer({ days, hours, mins, secs }) {
   refs.clockTimerDay.textContent = `${days}`
   refs.clockTimerHours.textContent = `${hours}`
   refs.clockTimerMins.textContent = `${mins}`
   refs.clockTimerSecs.textContent = `${secs}`
};

function stopUpdateClockTimer() {
   refs.clockTimerDay.textContent = `00`
   refs.clockTimerHours.textContent = `00`
   refs.clockTimerMins.textContent = `00`
   refs.clockTimerSecs.textContent = `00`
};



// Добавляет 0 - приводит к выводу значения 00
function pad(value) {
   return String(value).padStart(2, '0');
};

// Просчет времени - пересчет милисекунд
function getTimeComponents(time) {
   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
   const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
   const mins = pad  (Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
   return { days, hours, mins, secs };
};