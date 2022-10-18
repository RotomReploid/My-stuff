//1,1
var index = 0
function oneone() {
    if (index == 0) {
        let audio0 = $("#1up");
        let audio1 = $("#1down");
    } else if (index == 1) {
        let audio0 = $("#2up");
        let audio1 = $("#2down");
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
