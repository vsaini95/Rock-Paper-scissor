let computerHand = document.querySelector(".computerHand");
let modalContainer = document.querySelector(".modalContainer");
let hands = document.querySelector(".hands");
let contest = document.querySelector(".contest");

const handOptions = {
  rock: "images/icon-rock.svg",
  paper: "images/icon-paper.svg",
  scissors: "images/icon-scissors.svg",
};

let SCORE = 0;

const pickUserHand = (hand) => {
  hands.style.display = "none";
  contest.style.display = "flex";

  // set user Image
  document.querySelector(".userHand").innerHTML = `<h1>THE USER PICKED</h1>
        <div class="handImageContainer ${hand} circle">
          <img id="userPickImage" src="${handOptions[hand]}" />
        </div>`;

  let cphand = pickComputerHand();
  refree(hand, cphand);
};

const pickComputerHand = () => {
  let hands = ["rock", "paper", "scissors"];
  let compHand = hands[Math.floor(Math.random() * 3)];

  // set computer Image
  setTimeout(() => {
    computerHand.innerHTML = `<h1>THE HOUSE PICKED</h1>
          <div class="handImageContainer ${compHand} circle">
            <img id="comPickImage" src="${handOptions[compHand]}" />
          </div>`;
  }, 800);

  return compHand;
};
const refree = (userHand, comHand) => {
  if (userHand == "paper" && comHand == "scissors") {
    setTimeout(() => {
      setDecision("YOU LOSE");
    }, 1000);
  } else if (userHand == "paper" && comHand == "rock") {
    setTimeout(() => {
      setDecision("YOU WIN");
      setScore(SCORE + 1);
    }, 1000);
  } else if (userHand == "paper" && comHand == "paper") {
    setTimeout(() => {
      setDecision("IT'S TIE");
    }, 1000);
  }
  if (userHand == "rock" && comHand == "scissors") {
    setTimeout(() => {
      setDecision("YOU WIN");
      setScore(SCORE + 1);
    }, 1000);
  } else if (userHand == "rock" && comHand == "rock") {
    setTimeout(() => {
      setDecision("IT'S TIE");
    }, 1000);
  } else if (userHand == "rock" && comHand == "paper") {
    setTimeout(() => {
      setDecision("YOU LOSE");
    }, 1000);
  }
  if (userHand == "scissors" && comHand == "scissors") {
    setTimeout(() => {
      setDecision("IT'S TIE");
    }, 1000);
  } else if (userHand == "scissors" && comHand == "rock") {
    setTimeout(() => {
      setDecision("YOU LOSE");
    }, 1000);
  } else if (userHand == "scissors" && comHand == "paper") {
    setTimeout(() => {
      setDecision("YOU WIN");
      setScore(SCORE + 1);
    }, 1000);
  }
};
const restartGame = () => {
  hands.style.display = "flex";
  contest.style.display = "none";
  computerHand.innerHTML = `<h1>THE HOUSE PICKED</h1>
          <div class="handImageContainer shadow circle">
            <img id="comPickImage" src="" />
          </div>`;
  document.querySelector(".refree").innerHTML = "";
};

const setDecision = (decision) => {
  document.querySelector(".refree").innerHTML = `<div class="decision">
            <h1>${decision}</h1>
          </div>
          <div class="newGame" onclick="restartGame()">PLAY AGAIN</div>`;
};

const setScore = (score) => {
  SCORE = score;
  document.querySelector(".score h1").innerText = SCORE;
};

const openModal = () => {
  modalContainer.style.display = "flex";
  document.querySelector(".modal").style.flexDirection = "column";
};
const closeModal = () => {
  modalContainer.style.display = "none";
};
document.querySelector(".Rulesbutton").addEventListener("click", openModal);
document.querySelector(".modalRules img").addEventListener("click", closeModal);
