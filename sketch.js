// p5.js exploration sketch (no randomness)
// Playing with fixed shapes, lines, colors

function setup() {
  createCanvas(600, 600);
  background(20); // dark background
  noLoop(); // draw only once
}

function draw() {
  // background texture (points in fixed places)
  stroke(255, 50);
  for (let i = 0; i < 200; i++) {
    point(i * 3 % width, i * 2 % height);
  }

  // big colorful circles (fixed)
  fill(255, 0, 0, 150);
  ellipse(150, 150, 100);
  
  fill(0, 255, 0, 150);
  ellipse(300, 200, 120);
  
  fill(0, 0, 255, 150);
  ellipse(450, 150, 80);

  // overlapping lines (fixed)
  strokeWeight(2);
  stroke(255, 200, 0);
  line(100, 300, 500, 300);
  stroke(0, 200, 255);
  line(100, 350, 500, 400);
  stroke(200, 0, 255);
  line(100, 400, 500, 500);

  // rectangles (fixed)
  fill(255, 100, 100, 180);
  rect(100, 450, 80, 100);
  fill(100, 255, 100, 180);
  rect(250, 450, 120, 80);
  fill(100, 100, 255, 180);
  rect(400, 450, 100, 120);

  // arcs (fixed)
  stroke(255, 255, 0);
  strokeWeight(3);
  noFill();
  arc(150, 350, 100, 100, 0, PI);
  
  stroke(0, 255, 255);
  arc(450, 350, 120, 120, HALF_PI, PI + HALF_PI);

  // triangles (fixed)
  fill(255, 0, 255, 180);
  triangle(200, 100, 250, 200, 150, 200);
  
  fill(0, 255, 150, 180);
  triangle(350, 100, 400, 200, 300, 200);
}
