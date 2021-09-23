const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "icecream",
    img: "images/ice-cream.png",
  },
  {
    name: "icecream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector(".grid");
let resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon =[];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipcard);
    grid.appendChild(card);
  }
}

function checkForMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];
  if (cardsChosen[0] === cardsChosen[1]) {
    alert("You found the match");
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    cardsWon.push(cardsChosen);
  } else {
    alert("try again");
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
  }
  cardsChosen = [];
  cardsChosenId = [];
  resultDisplay.textContent = cardsWon.length;
  if(cardsWon.length === cardArray.length/2){
    resultDisplay.textContent = 'Congratulations! You found them all!'
  }
}

function flipcard() {
  let cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

createBoard();

// const grid = document.querySelector(".grid");
// const cards = Array.from(grid.querySelectorAll(".card"));
// const scoreSpan = document.querySelector('.score');

// const images = [
//   "cheeseburger",
//   "fries",
//   "hotdog",
//   "ice-cream",
//   "milkshake",
//   "pizza",
// ];

// let clicks = 0;
// let score = 0;
// const imageArr = [];

// function generateRandom(range) {
//   return Math.floor(Math.random() * range + 1);
// }
// function handleClick(e){
//     clicks++;
//     if(clicks <= 2){
//         imageArr.push(e.target.alt);
//     }else{
//         imageArr[0] === imageArr[1] ? scoreSpan.textContent = "1" : scoreSpan.textContent = "0"
//     }
//     console.log(imageArr);
// }

// function generateRandomImages() {
//   cards.map((card) => {
//     let img = document.createElement("img");
//     const randomImage = images[generateRandom(images.length) - 1]
//     img.src = `./images/${randomImage}.png`;
//     img.alt = randomImage;
//     card.appendChild(img);
//     card.addEventListener('click', handleClick);
//   });
// }
