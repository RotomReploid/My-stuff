// JavaScript
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function say(speak, delay) {
  setTimeout(() => {
    document.getElementById("output").innerText = speak;
  }, delay);
}
function Rating() {
  var name = document.getElementById("inputbox").value;
  var casser = name.toLowerCase();
  var defaults = new Array[("Cool name, dude!", "Interesting!", "Hmmmm...")]();
  //all da names
  switch (casser) {
    case "tanner":
      say("Your name sucks, Tanner. Get a new one, like Daniel.");
    default:
      say(defaults[random(0, 2)]);
      break;
  }
  return false;
}
