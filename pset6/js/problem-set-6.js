/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {

  var p = document.getElementById("canvas1");
   let rectangle = p.getContext("2d");
   rectangle.clearRect(0, 0, p.width, p.height);
   rectangle.font = "48px sans-serif";
   rectangle.strokeText("Hello, World!", 10, 50);

}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {

  let height = Number(prompt("Height: "));
  let width = Number(prompt("Width: "));
  let x = Number(prompt("X: "));
  let y = Number(prompt("Y: "));

  if (isNaN(x) || isNaN(y) || isNaN(height) || isNaN(width)) {
      alert("One of your inputs is not a number.");
    }

   var p = document.getElementById("canvas2");
   let rectangle = p.getContext("2d");
   rectangle.clearRect(0, 0, p.width, p.height);

   if (width > 1023) {
     alert("The rectangle will not fit on the canvas.");
   } else if (width < 1) {
      alert("Your width is too small.");
   } else if (height > 511) {
      alert("The rectangle will not fit on the canvas.");
   } else if (height < 1) {
      alert("Your height is too small.");
   } else if ((width + x) > 1023) {
      alert("The rectangle will not fit on the canvas.");
   } else if (x < 5) {
      alert("Your x-coordinate is too small.");
   } else if ((height + y) > 511) {
      alert("The rectangle will not fit on the canvas.")
   } else if (y < 5) {
      alert("Your y-coordinate is too small.");
   } else {
      rectangle.strokeRect(x, y, width, height);
   }
}


/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {

let color = prompt("Please enter a color.");

var p = document.getElementById("canvas3")
let colorBox = p.getContext("2d");
colorBox.clearRect(0, 0, p.widht, p.height);
if (color === "blue" || color === "black" || color === "green" || color === "orange" || color === "purple" || color === "red" || color === "yellow") {
  colorBox.fillStyle = color;
  colorBox.fillRect(10, 10, 100, 50);
} else {
  alert(color + " is not a supported color.");
}

}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {

  let side1 = Number(prompt("Side 1: "));
  let side2 = Number(prompt("Side 2: "));
  let side3 = Number(prompt("Side 3: "));

  if (Math.pow(side1, 2) + Math.pow(side2, 2) != Math.pow(side3, 2)) {
    alert ("This is not a valid right triangle.");
  } else if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
    alert ("One of your inputs is not a number.");
  } else {
    let x = 10 + side1;
    var p = document.getElementById("canvas4");
    let triangle = p.getContext("2d");
    if (side2 > 1023 || side1 > 511) {
      alert("The triangle will not fit on the canvas.");
    } else if (side1 < 1 || side2 < 1) {
      alert("This triangle is too small.")
    } else {
      triangle.clearRect(0, 0, p.height, p.width);
      triangle.beginPath();
      triangle.moveTo(10, 10);
      triangle.lineTo(10, x);
      triangle.lineTo(side2, x);
      triangle.closePath();
      triangle.stroke();
    }
  }
}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {

  let radiusInput = Number(prompt("Radius: "));
  if (isNaN(radiusInput)) {
    alert("Your input is not a number.")
  } else if (radiusInput < 1) {
      alert("Your radius is too small.")
    } else if ((radiusInput * 2 + 10) > 511) {
      alert("The smiley face will not fit on the canvas.")
    } else {
      let x = radiusInput + 10;
      var p = document.getElementById("canvas5");
      let smileyFace = p.getContext("2d");
      smileyFace.clearRect(0, 0, p.width, p.height);
      smileyFace.beginPath();
      smileyFace.arc(x, x, radiusInput, 0, Math.PI * 2);
      smileyFace.moveTo(x + radiusInput - radiusInput * 0.3, x);
      smileyFace.arc(x, x, radiusInput * 0.7, 0, Math.PI);
      smileyFace.moveTo(x - radiusInput * 0.35 + radiusInput * 0.1, x - radiusInput * 0.5);
      smileyFace.arc(x - radiusInput * 0.35, x - radiusInput * 0.5, radiusInput * 0.1, 0, Math.PI * 2);
      smileyFace.moveTo(x + radiusInput * 0.35 + radiusInput * 0.1, x - radiusInput * 0.5);
      smileyFace.arc(x + radiusInput * 0.35, x - radiusInput * 0.5, radiusInput * 0.1, 0, Math.PI * 2);
      smileyFace.closePath();
      smileyFace.stroke();
    }
}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {

  let innerRadius = Number(prompt("Inner Radius: "));
  let outerRadius = Number(prompt("Outer Radius: "));
  if (isNaN(innerRadius) || isNaN(outerRadius)) {
    alert("One of your inputs is not a number.")
  } else if (innerRadius < 1) {
    alert("Your inner radius is too small.");
  } else if (outerRadius < 2) {
     alert("Your outer radius is too small.");
  } else if (outerRadius <= innerRadius) {
    alert("Your outer radius must be larger than your inner radius.");
  } else {
    var p = document.getElementById("canvas6");
    let theStar = p.getContext("2d");
    theStar.clearRect(0, 0, p.width, p.height);
    theStar.beginPath();
    theStar.moveTo(125, (125 - outerRadius));
    let y = 0;
    for (let x = 0; x <= 5; x++) {
      theStar.lineTo(125 + Math.round((Math.cos(y - (Math.PI / 2)) * outerRadius)), 125 + Math.round((Math.sin(y - (Math.PI / 2)) * outerRadius)));
      y += Math.PI*  0.2;
      theStar.lineTo(125 + Math.round((Math.cos(y - (Math.PI / 2)) * innerRadius)), 125 + Math.round((Math.sin(y - (Math.PI / 2)) * innerRadius)));
      y += Math.PI * 0.2;
    }
    theStar.stroke();
    theStar.closePath();
    /* I did not include any parameters for if the star is too large to fit on the canvas as there were none in the example */
  }
}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {

  var p = document.getElementById("canvas7");
  let stopSign = p.getContext("2d");
  let y = Math.round(Math.sqrt(3200));
  let x = 10 + y;
  stopSign.clearRect(0, 0, p.width, p.height);
  stopSign.beginPath()
  stopSign.moveTo(x, 10);
  stopSign.lineTo((x - y), (10 + y));
  stopSign.lineTo((x - y), (10 + y + 80));
  stopSign.lineTo(x, 10 + 80 + 2 * y);
  stopSign.lineTo((x + 80), (10 + 80 + 2 * y));
  stopSign.lineTo((x + y + 80), (10 + 80 + y));
  stopSign.lineTo((x + y + 80), (10 + y));
  stopSign.lineTo((x + 80), 10);
  stopSign.lineTo(x, 10);
  stopSign.fillStyle = "red";
  stopSign.fill();
  stopSign.moveTo(x, 10);
  stopSign.font = "65px sans-serif";
  stopSign.fillStyle = "white";
  stopSign.textBaseline = "middle";
  stopSign.fillText("STOP", x - y + 8, 10 + y + 40);
  stopSign.closePath();

}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {

  var p = document.getElementById("canvas8");
  var thePyramid = p.getContext("2d");
  thePyramid.clearRect(0, 0, p.width, p.height);
  var pyrLength = Number(prompt("Length: "));
  if (isNaN(pyrLength)) {
    alert("Your input is not a number.")
  } else if ((pyrLength * 5 + 10) > 1023 || (pyrLength * 5 + 10) > 511) {
      alert("The pyramid will not fit on the canvas.")
    } else {
      var x = 10;
      var y = p.height - 10 - pyrLength;
      var z = 0;
      for (var w = 0; w < 5; w++) {
        for (var v = 0; v < 5 - w; v++) {
          thePyramid.strokeRect(x + z, y, pyrLength, pyrLength);
          z = z + pyrLength;
        }
        x = x + Math.floor(pyrLength / 2);
        y = y - pyrLength;
        z = 0;
        }
      }
  }

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {

var p = document.getElementById("canvas9");
let bigHouse = p.getContext("2d");
bigHouse.clearRect(0, 0, 1024, 760);
let houseColor = prompt("House Color: ");
let doorColor = prompt("Front Door Color: ");
if (((houseColor == "blue") || (houseColor == "brown") || (houseColor == "green") || (houseColor == "orange") || (houseColor == "purple") || (houseColor == "red") || (houseColor == "yellow")) &&((doorColor == "blue") || (doorColor == "brown") || (doorColor == "green") || (doorColor == "orange") || (doorColor == "purple") || (doorColor == "red") || (doorColor == "yellow"))) {
  bigHouse.beginPath();
  bigHouse.moveTo(512, 310);
  bigHouse.lineTo(150, 310);
  bigHouse.lineTo(512, 10);
  bigHouse.lineTo(880, 310);
  bigHouse.lineTo(512, 310);
  bigHouse.fillStyle = "gray";
  bigHouse.fill();
  bigHouse.closePath();

  bigHouse.beginPath();
  bigHouse.moveTo(150, 310);
  bigHouse.fillStyle = houseColor;
  bigHouse.fillRect(150, 310, 730, 440);
  bigHouse.closePath();

  bigHouse.beginPath();
  bigHouse.fillStyle = "#add8e6";
  bigHouse.fillRect(300, 410, 60, 60);
  bigHouse.closePath();

  bigHouse.beginPath();
  bigHouse.fillStyle = "#add8e6";
  bigHouse.fillRect(730, 410, 60, 60);
  bigHouse.closePath();

  bigHouse.beginPath();
  bigHouse.fillStyle = "#add8e6";
  bigHouse.fillRect(300, 630, 60, 60);
  bigHouse.closePath();

  bigHouse.beginPath();
  bigHouse.fillStyle = "#add8e6";
  bigHouse.fillRect(730, 630, 60, 60);
  bigHouse.closePath();

  bigHouse.beginPath();
  bigHouse.fillStyle = doorColor;
  bigHouse.fillRect(500, 630, 40, 120);
  bigHouse.closePath();
} else {
  alert("One of your colors is not supported.");

}
}
