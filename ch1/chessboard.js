// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

// capture everything in a function
function drawBoard(squareSize) {

  // odd lines should start with a space
  // even lines should start with a #

  for (let i = 1; i <= squareSize; i++) {
    if( i % 2 !== 0) {
      printLine(1, squareSize);
    }
    else {
      printLine(0, squareSize);
    }
  }
}

function printLine(switchNum, squareSize) {
  lineText = "";
  if (switchNum === 1) {
    for (let j = 1; j <= squareSize.length; j++) {
      if( i % 2 !== 0) {
        lineText += " ";
      }
      else {
        lineText += "#"
      }
    }
  }
  else {
    for (let k = 0; k < squareSize.length; k++) {
      if( i % 2 !== 0) {
        lineText += "#";
      }
      else {
        lineText += " "
      }
    }
  }
}

drawBoard(8);



  // let lineLength = squareSize;
  // let lines = []
  // for (var i = 0; i < squareSize; i++) {
  //   let line = ""
  //   if( i % 2 === 0) {
  //     line += " "
  //   } 
  // }