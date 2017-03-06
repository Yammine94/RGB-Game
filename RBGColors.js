var numberSquares = 6;
var colors = generateRandomColors(numberSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for (var i = 0; i < modeButtons.length; i++){
  modeButtons[i].addEventListener("click", function() {
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");

    this.textContent === "Easy" ? numberSquares = 3: numberSquares = 6;
    reset();
  });
}
function reset() {
  //generate all new colors
  this.textContent = "New Colors";
  messageDisplay.textContent = " ";
  colors = generateRandomColors(numberSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change color display to match picked color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for (var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
    squares[i].style.background = colors[i];
    } else {
    squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
}


resetButton.addEventListener("click", function(){
  //generate all new colors
  this.textContent = "New Colors";
  messageDisplay.textContent = " ";
  colors = generateRandomColors(numberSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change color display to match picked color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for (var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
  }
  h1.style.background = "steelblue";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
  squares[i].style.background = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.background;

    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!!";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
};

function changeColors(color){
  for (var i = 0; i < squares.length; i++){
    squares[i].style.background = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  var arr = []
  //add num random colors to array
  for (var i = 0; i < num; i++){
    // get random color and push into array
    arr.push(randomColor() );
  }
  //return that array
  return arr;
}

function randomColor(){
 var r = Math.floor(Math.random() * 256);
 var g = Math.floor(Math.random() * 256);
 var b = Math.floor(Math.random() * 256);

 return "rgb(" + r + ", " + g + ", " + b + ")";
}
