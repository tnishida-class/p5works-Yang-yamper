function setup(){
  createCanvas(300, 100);
  background(200);
  fill(0);
  star(10,150,50,50);
}

function star(n,cx,cy,r){
  beginShape();
  for(var i = 0; i < n; i++){
    let theta = TWO_PI * i * 1 / n - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}
