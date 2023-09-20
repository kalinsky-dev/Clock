const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();

  // Check if the seconds are 0 and switch off the transition
  // to prevent returning the Seconds Hand to the 0 and rotation backwards!
  if (seconds == 0) {
    if (secondHand.classList.contains('second-hand-when-0')) {
      secondHand.classList.remove('second-hand-when-0');
    } else {
      secondHand.classList.add('second-hand-when-0');
    }
  }

  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
