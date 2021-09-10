const grid = document.querySelector(".grid");

const images = ["cheeseburger", "fries", "hotdog", "ice-cream", "milkshake", "pizza"];

function generateRandom(range){
    return Math.floor(Math.random()*range + 1);
}
function generateRandomImages(){
    for (let i = 0; i < 16; i++) {
        let img = document.createElement('img');
        img.src = `./images/${images[generateRandom(images.length) - 1]}.png`;
        grid.appendChild(img);
    }
}


