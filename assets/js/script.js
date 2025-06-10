let date = document.getElementById("date");
let time = document.getElementById("time");

function setTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  let year = now.getFullYear();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  const timeString = hours + ":" + minutes + ":" + seconds + " " + ampm;
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }

  let currentTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
  let currentDay = day + "/" + month + "/" + year;
  date.innerHTML = currentDay;
  time.innerHTML = currentTime;
}

setInterval(setTime);
setTime();
