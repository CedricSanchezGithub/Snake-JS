let leftValue = getComputedStyle(snake).left; // Récupère la propriété css via getComputedStyle de l'id(snake)
let left = parseInt(leftValue, 10); // récupère uniquement le number de cette donnée sur base 10

let rightValue = getComputedStyle(snake).right;
let right = parseInt(rightValue, 10);

function snake_directon(direction) {
  snake.style.direction = `${direction}px`;
  console.log(direction);
}

setInterval(function () {
  snake_directon(left);
  left += 5;
}, 500);
