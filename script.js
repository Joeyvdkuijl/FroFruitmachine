let fruitsoorten = ["&#x1F351;", "&#x1F34D;", "&#x1F352;", "&#x1F348;", "&#x1F34B;", "&#x1F34A;", "&#x1F349;", "&#x1F345;", "&#x1F346;", "&#x1F347;"]
let draai = document.getElementById('shuffle')
let emojis = document.getElementsByClassName('random')
let aantalText = document.getElementById('draai')

let aantal = 0
let canPlay = true
let keerGedraaid = 0


function random() {
  keerGedraaid = keerGedraaid + 1;
  for (var i = 0; i < emojis.length; i++) {
    emojis[i].innerHTML = fruitsoorten[Math.floor(Math.random() * fruitsoorten.length)];
  }
  if (keerGedraaid == 30) {
    checkWin();
  }
}

function draaiEmoji() {
    if (canPlay) {
    aantal = aantal + 1;
    keerGedraaid = 0;
    aantalText.innerHTML = `Keren gedraaid: ${aantal} \n`;
    for(var x=0; x<30; x++) window.setTimeout(random, 2000 / x);
  }
}

draai.addEventListener("click", draaiEmoji);
random()