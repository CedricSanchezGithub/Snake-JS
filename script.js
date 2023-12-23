let leftValue = getComputedStyle(snake).left;
let left = leftValue;
let right = 50;
console.log(snake);
function snake_right() {
  snake.style.left = `${left}%`;
  left += 1;
  console.log(left);
}

setInterval(snake_right, 1000);

function snake_right() {
    snake.style.right = `${right}%`;
    right += 1;
    console.log(right);
  }