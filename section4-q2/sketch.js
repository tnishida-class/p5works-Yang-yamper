// テキスト「アニメーション」
let x, y, vx, vy;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 8;
  vy = 8;
}

function draw(){
  background(160, 192, 255);
  push();
  translate(x,y)
  rotate(frameCount/5.0)
  translate(-x,-y)
  star(x,y,30)
  pop();
  x += 4
  y += 4
  if(x > width){ x = 0; }
  else if(x < 0){ x = width; }
  if(y > height){ y = 0; }
  if(y < 0){ y = height; }
}

function star(cx, cy, r){
  fill(255,249,30);
  noStroke();
  beginShape();
  for(var i = 0; i < 20; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI;
    var x = cx + cos(theta) * r;
    var y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}
function mouseClicked(){
  x = mouseX;
  y = mouseY;
}
function mouseWheel(){
  x -= 10
  y -= 10
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
