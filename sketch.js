// p5.js exploration sketch
// Playing with shapes, lines, colors, randomness

function setup() {
  createCanvas(600, 600);
  background(20); // dark background
  noLoop(); // draw only once, remove this to animate
}

function draw() {
  // draw background texture
  for (let i = 0; i < 200; i++) {
    stroke(255, 50);
    point(random(width), random(height));
  }

  // big random colorful circles
  for (let i = 0; i < 10; i++) {
    fill(random(255), random(255), random(255), 150);
    noStroke();
    ellipse(random(width), random(height), random(50, 150));
  }

  // overlapping lines
  strokeWeight(2);
  for (let i = 0; i < 20; i++) {
    stroke(random(255), random(255), random(255));
    line(random(width), random(height), random(width), random(height));
  }

  // some rectangles
  for (let i = 0; i < 8; i++) {
    fill(random(255), random(255), random(255), 180);
    rect(random(width), random(height), random(40, 120), random(40, 120));
  }

  // arcs to play with curves
  for (let i = 0; i < 6; i++) {
    stroke(random(255), random(255), random(255));
    strokeWeight(random(1, 4));
    noFill();
    arc(random(width), random(height), random(50, 150), random(50, 150), random(TWO_PI), random(TWO_PI));
  }
  
  // random triangles
  for (let i = 0; i < 5; i++) {
    fill(random(255), random(255), random(255), 180);
    triangle(random(width), random(height),
             random(width), random(height),
             random(width), random(height));
  }
}
