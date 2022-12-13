function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function answer(result){
    document.querySelector("#answer").innerText = result
}

function solution(){
    let x = getRndInteger(1, 100);
    switch(x){
        case 1:
          answer(`i cant hit both :(`);
          break;
        case 100:
          answer('the brakes');
          break;
        default:
          if(x % 2 == 0){
              answer('Left')
          } else {
              answer('Right')
          }
          break;
    }

}