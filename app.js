let errH = document.querySelector('.errMessageH');
let errM = document.querySelector('.errMessageM');
let errS = document.querySelector('.errMessageS');
let btn = document.querySelector('.btn');

function isCorrect(hh, mm, ss) {
  let oldHour = hh;
  let oldMin = mm;
  let oldSec = ss;
  console.log(oldHour, oldMin, oldSec);
}

function timeConverter() {
  console.clear();
  errH.innerText = '';
  errM.innerText = '';
  errS.innerText = '';

  var hour = document.getElementById('hour').value;
  var min = document.getElementById('min').value;
  var sec = document.getElementById('sec').value;

  if (hour >= 1 && hour <= 12)
    if (min >= 0 && min <= 59)
      if (sec >= 0 && sec <= 59) isCorrect(hour, min, sec);
      else errS.innerText = '0 ≤ Seconds ≤ 59';
    else errM.innerText = '0 ≤ Minutes ≤ 59';
  else errH.innerText = '1 ≤ Hour ≤ 12 ';
}

btn.addEventListener('click', timeConverter);
