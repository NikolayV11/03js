/*function get(m1) {
  console.log(`${m1}`);
}

function res(name, time) {
  setTimeout(() => {
    get(name);
  }, time);
}

res("Nick", 1200);
*/

/*
let stop = 0;
let i = 0;
function ty() {
  if (i == 2) {
    i = 0;
  }
  console.log(i);
  i++;
}

const interval = setInterval(() => {
  if (stop === 5) {
    clearInterval(interval);
  }
  stop++;
  ty();
}, 1000);
*/

// if (["a", "b"].includes("d")) {
//   console.log(1);
// } else {
//   console.log(2);
// }
// console.log(["a", "b"].includes("a"));

// Closures Замыкание функции

function createPerson(name) {
  return function (lastName) {
    console.log(`${name} ${lastName}`);
  };
}

const addLastName = createPerson("Nickolay");
addLastName("Vasilev");
addLastName("Petrov");
