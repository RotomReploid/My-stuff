// JavaScript
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function say(speak, delay) {
  setTimeout(() => {
    $(this).innerText = speak;
  }, delay);
}
var Tannerindex = 0;
function Rating() {
  var output = $("#output");
  var rollButton = $("rollbuttn");
  var name = document.getElementById("inputbox").value;
  var casser = name.toLowerCase();
  var defaults = ["Cool name, dude!", "Interesting!", "Hmmmm..."];
  //all da names
  switch (casser) {
    case "tanner":
      output.say("Your name sucks, Tanner. Get a new one, like Daniel.");
      Tannerindex = 1;
      break;
    case "daniel":
      switch (Tannerindex) {
        case 0:
          output.say("Cool name, Daniel!");
          break;
        case 1:
          output.say("Good fix, Daniel!");
          Tannerindex = 0;
          break;
      }
      break;
    case "brogan":
      if (name == "BrOGaN") {
        say("Bromine Oxygen Gallium Nitrogen?");
      } else {
        say("That name sounds oddly familiar...");
      }
      break;
    case "rickroll":
      output.say("Very funny-");
      setTimeout(() => {
        rollbutton.show();
      }, 300);
      
        say("Uh oh...", 2000);
      
        say("Don't click that...", 3000);
      
      setTimeout(() => {
        document.querySelector("button").innerText = "Seriously";
      }, 2500);
      
      setTimeout(() => {
        document.querySelector("button").innerText = "Don't click me, dude";
      }, 3100);
      
      addEventListener("click", ricketyroll);
      break;
    default:
      say(defaults[random(0, 2)]);
      break;
  }
  return false;
}
function ricketyroll() {
  say("What did I tell you");
  setTimeout(() => {
    $("#rollbuttn").innerText = "Dumbass";
  }, 400);
}
