let errH = document.querySelector('.errMessageH');
let errM = document.querySelector('.errMessageM');
let errS = document.querySelector('.errMessageS');
let btn = document.querySelector('.btn');
let output = document.querySelector('#output');

function isCorrect(hh, mm, ss, aa) {
  let hour = Number(hh),
    min,
    sec;

  mm.length == 1 ? (min = 0 + mm) : (min = mm);
  ss.length == 1 ? (sec = 0 + ss) : (sec = ss);

  if (aa === 'AM' && hour == 12) {
    let newHour = hour - 12;
    output.value = `${newHour}:${min}:${sec}`;
  } else if (aa === 'PM' && hour >= 1 && hour <= 11) {
    let newHour = hour + 12;
    output.value = `${newHour}:${min}:${sec}`;
  } else output.value = `${hour}:${min}:${sec}`;
}

function timeConverter() {
  console.clear();
  errH.innerText = '';
  errM.innerText = '';
  errS.innerText = '';

  var hour = document.getElementById('hour').value;
  var min = document.getElementById('min').value;
  var sec = document.getElementById('sec').value;
  var period = document.getElementById('period').value;

  if (hour >= 1 && hour <= 12)
    if (min >= 0 && min <= 59)
      if (sec >= 0 && sec <= 59) isCorrect(hour, min, sec, period);
      else errS.innerText = '0 ≤ Seconds ≤ 59';
    else errM.innerText = '0 ≤ Minutes ≤ 59';
  else errH.innerText = '1 ≤ Hour ≤ 12 ';

  // hour >= 1 && hour <= 12
  //   ? min >= 0 && min <= 59
  //     ? sec >= 0 && sec <= 59
  //       ? isCorrect(hour, min, sec, period)
  //       : (errS.innerText = '0 ≤ Seconds ≤ 59')
  //     : (errM.innerText = '0 ≤ Minutes ≤ 59')
  //   : (rrH.innerText = '1 ≤ Hour ≤ 12 ');
}

btn.addEventListener('click', timeConverter);
