const firstName = "MaMaBABA";
let result = "";
for (let i = 0; i < firstName.length; i++) {
  if (firstName[i].toLowerCase() == "a") {
    result += `${firstName[i]}, ${i}. `;
  }
}
console.log(firstName.charAt(2));
