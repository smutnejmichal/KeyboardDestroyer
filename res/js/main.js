let scoreCounter = document.getElementById("score");
let keyboard = document.getElementById("keyboard");
let hand = document.getElementById("hand");
let repair = document.getElementById("repair");
let repairCounter = document.getElementById("repairs");

let score = 0;
let repairScore = 0;
let keyboardDurability = 18;
let load = 1;
let b = 0;
let c = 0;
let d = 0;
let x = 1;

window.onload = () => {
  durabilityCheck();
  setInterval(() => {
    if (load == 1) {
      if (keyboardDurability > 0) keyboardHit();
      else keyboardRepair();
    }
  }, 2000);
};

window.addEventListener("focus", () => {
  load = 1;
});
window.addEventListener("blur", () => {
  load = 0;
});

let keyboardHit = () => {
  hand.style.display = "block";
  setTimeout(() => {
    hand.style.top = 50 + "%";
    score++;
    keyboardDurability--;
    scoreCounter.innerHTML = `Score: ${score}`;
    keyboardShake();
    if (x == 1) {
      if (keyboardDurability == d) {
        keyboard.src = "./res/img/keyboard_second.png";
      } else if (keyboardDurability == b) {
        keyboard.src = "./res/img/keyboard_third.png";
      } else if (keyboardDurability == c) {
        keyboard.src = "./res/img/keyboard_fourth.png";
      }
    }
    setTimeout(() => {
      hand.style.top = 100 + "%";
      setTimeout(() => {
        hand.style.display = "none";
      }, 250);
    }, 180);
  }, 10);
};

let keyboardShake = () => {
  keyboard.style.transform = `rotate(20deg)`;
  setTimeout(() => {
    keyboard.style.transform = `rotate(-20deg)`;
  }, 20);
  setTimeout(() => {
    keyboard.style.transform = `rotate(0deg)`;
  }, 40);
};

let keyboardRepair = () => {
  repairScore++;
  repairCounter.innerHTML = `Repairs: ${repairScore}`;
  repair.style.opacity = 100 + "%";
  keyboard.src = "./res/img/keyboard_first.png";
  keyboardDurability = Math.round(Math.random() * 100);
  durabilityCheck();
  setTimeout(() => {
    repair.style.opacity = 0 + "%";
  }, 1000);
};

let durabilityCheck = () => {
  if (keyboardDurability > 10) {
    x = 1;
    d = keyboardDurability - 5;
    b = Math.round(keyboardDurability / 2);
    c = Math.round(b / 2);
  } else {
    x = 0;
  }
};
