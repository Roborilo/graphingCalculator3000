const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 300;
const originX = canvas.width/2;
const originY = canvas.height/2;

drawGrid();

function drawLine(xStart, yStart, x, y, color = "white", thick = 2){
  ctx.beginPath();
  ctx.moveTo(xStart, yStart);
  ctx.lineTo(x, y);
  ctx.lineWidth = thick;
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.closePath();
}

function drawGrid() {
  //Draw x and y axis
  drawLine(0, originY, canvas.width, originY);
  drawLine(originX, 0, originX, canvas.height);

  //Draw x and y markers
  for (i = 0; i <= canvas.width; i++) {
    if (i % 10 === 0) {
      drawLine(i, originY - 3, i, originY + 3);
    }
  }

  for (i = 0; i <= canvas.height; i++) {
    if (i % 10 === 0) {
      drawLine(originX - 3, i, originX + 3, i);
    }
  }
}

function drawFunction() {
  //Reset canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid();

  let input = convertInput(document.querySelector('input').value);
  
  //Draws the function by cycling between all the canvas width and setting a line based on the previous point.
  for (x = -(originX); x < originX; x += 1){
    let pointY = -(eval(input)) + originY;
    let pointX = x + originX;

    if (canvas.x != 0){
      drawLine(previousX, previousY, pointX, pointY, "black");
    }

    var previousX = pointX;
    var previousY = pointY;
  }
}

function convertInput(input) {
  input = input.replaceAll("^", "**").replaceAll(/[a-zA-Z]/g, "x");
  return input;
}























