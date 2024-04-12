// Functionize Minecraft Fishing Start Code

//HTML Var
let result = document.getElementById("result-img");

//Count Var
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  //Determine Selected Character
  let character = document.getElementById("character-select").value;

  if (character === "steve") {
    //Steve Fish Simulator
    let rand = Math.random();
    if (rand < 0.7) {
      result.src = "img/Raw-Cod.png";
      numCod = numCod + 1;
      document.getElementById("num-cod").innerHTML = numCod;
    } else if (rand < 0.9) {
      result.src = "img/Raw-Salmon.png";
      numSalmon = numSalmon + 1;
      document.getElementById("num-salmon").innerHTML = numSalmon;
    } else if (rand < 0.95) {
      result.src = "img/Tropical-Fish.png";
      numTropical = numTropical + 1;
      document.getElementById("num-tropical").innerHTML = numTropical;
    } else {
      result.src = "img/Pufferfish.png";
      numPuffer = numPuffer + 1;
      document.getElementById("num-puffer").innerHTML = numPuffer;
    }
  } else if (character === "alex") {
    //Alex Fish Simulator
    let rand = Math.random();
    if (rand < 0.1) {
      result.src = "img/Raw-Cod.png";
      numCod = numCod + 1;
      document.getElementById("num-cod").innerHTML = numCod;
    } else if (rand < 0.2) {
      result.src = "img/Raw-Salmon.png";
      numSalmon = numSalmon + 1;
      document.getElementById("num-salmon").innerHTML = numSalmon;
    } else if (rand < 0.5) {
      result.src = "img/Tropical-Fish.png";
      numTropical = numTropical + 1;
      document.getElementById("num-tropical").innerHTML = numTropical;
    } else {
      result.src = "img/Pufferfish.png";
      numPuffer = numPuffer + 1;
      document.getElementById("num-puffer").innerHTML = numPuffer;
    }
  } else if (character === villager) {
    //villager fish sim
    let rand = Math.random();
    if (rand < 0.25) {
      result.src = "img/Raw-Cod.png";
      numCod = numCod + 1;
      document.getElementById("num-cod").innerHTML = numCod;
    } else if (rand < 0.5) {
      result.src = "img/Raw-Salmon.png";
      numSalmon = numSalmon + 1;
      document.getElementById("num-salmon").innerHTML = numSalmon;
    } else if (rand < 0.75) {
      result.src = "img/Tropical-Fish.png";
      numTropical = numTropical + 1;
      document.getElementById("num-tropical").innerHTML = numTropical;
    } else {
      result.src = "img/Pufferfish.png";
      numPuffer = numPuffer + 1;
      document.getElementById("num-puffer").innerHTML = numPuffer;
    }
  }
}
