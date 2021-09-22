const grid = document.querySelector(".grid");
const cards = Array.from(grid.querySelectorAll(".card"));
const scoreSpan = document.querySelector('.score');

const images = [
  "cheeseburger",
  "fries",
  "hotdog",
  "ice-cream",
  "milkshake",
  "pizza",
];

let clicks = 0;
let score = 0;
const imageArr = [];

function generateRandom(range) {
  return Math.floor(Math.random() * range + 1);
}
function handleClick(e){
    clicks++;
    if(clicks <= 2){
        imageArr.push(e.target.alt);
    }else{
        imageArr[0] === imageArr[1] ? scoreSpan.textContent = "1" : scoreSpan.textContent = "0"
    }
    console.log(imageArr);
}

function generateRandomImages() {
  cards.map((card) => {
    let img = document.createElement("img");
    const randomImage = images[generateRandom(images.length) - 1]
    img.src = `./images/${randomImage}.png`;
    img.alt = randomImage;
    card.appendChild(img);
    card.addEventListener('click', handleClick);
  });
}
