// 最終課題を制作しよう
let balls = [];

let p, q;

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(24,27,56);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    noStroke();
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }
  snow();
  star(p,q,5)
}

function snow(){
  let dx = random(5,-1)
  let dy = random(2,5)
  if( dy < 2){
    dy = 3
  }
    const b = { x: random(windowWidth), y: 0, size:random(10), vx: dx, vy: dy };
    balls.push(b);
}

function star(cx, cy, r){
  push();
  fill(255,255,0,100);
  noStroke();
  beginShape();
  for(var i = 0; i < 20; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI;
    var x = cx + cos(theta) * r;
    var y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
  pop();
  p -= 8
  q += 8
}

function mouseWheel(){
  let dx = random(-5,-1)
  let dy = random(7,10)
  if( dy < 2){
    dy = 3
  }
    const b = { x: random(windowWidth), y: 0, size:random(10), vx: dx, vy: dy };
    balls.push(b);
}

function mouseClicked(){
  p = mouseX
  q = mouseY
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
