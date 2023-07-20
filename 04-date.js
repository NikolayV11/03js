// /*
// const now = new Date();
// console.log(now.getHours());
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleDateString());
// console.log(now.toLocaleTimeString());
// */

// const output = document.querySelector("#output");

// let date;
// let status = false;

// function timeDate() {
//   setInterval(() => {
//     date = new Date();
//     // if (status) {
//     //   clearInterval(time);
//     // }
//     // output.innerHTML = date.toLocaleString();
//   }, 100);
// }



let mode = "time";

const output = document.querySelector("#output");
const fullBtn = document.querySelector("#full");
const dateBtn = document.querySelector("#date");
const timeBtn = document.querySelector("#time");

//closures function
function bindMode(name) {
  return function () {
    mode = name;
    update();
  };
}

// button.onclick
fullBtn.onclick = bindMode("full");

dateBtn.onclick = bindMode("date");

timeBtn.onclick = bindMode("time");

update();

setInterval(update, 1000);

function update() {
  output.textContent = fotmat(mode);
}

// Pure Function

function fotmat(formatMode) {
  const now = new Date();

  switch (formatMode) {
    case "time":
      return now.toLocaleTimeString();
    case "date":
      return now.toLocaleDateString();
    case "full":
      return now.toLocaleString();
    default:
      return now.toLocaleTimeString();
  }
}
