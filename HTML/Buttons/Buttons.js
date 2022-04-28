//1,1
var index = 0
function oneone() {
    if (index == 0) {
        let audio0 = new Audio('mixkit-rubber-duck-squeak-1014.wav');
        let audio1 = new Audio('mixkit-rubber-duck-squeak-1014 (1).wav');
    } else if (index == 1) {
        let audio0 = new Audio('swannee_whistle_descend.mp3');
        let audio1 = new Audio('whistle.mp3')
    }
}
//2,1
function twoone() {
    switch($(this).style.backgroundColor){
        case red: $(this).style.backgroundColor = "green"
            break;
        case green: $(this).style.backgroundColor = "blue"
            break;
        case blue: $(this).style.backgroundColor = "hotpink"
            break;
        case hotpink: $(this).style.backgroundColor = "red"
    }
}