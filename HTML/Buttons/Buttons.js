//1,1
var audio0 = $("#1up");
var audio1 = $("#1down");
//2,1
function twoone() {
    switch(document.getElementById("2-1").style.backgroundColor){
        case "red": document.getElementById("2-1").style.backgroundColor = "green"
            break;
        case "green": document.getElementById("2-1").style.backgroundColor = "blue"
            break;
        case "blue": document.getElementById("2-1").style.backgroundColor = "hotpink"
            break;
        case "hotpink": document.getElementById("2-1").style.backgroundColor = "red"
    }
}
