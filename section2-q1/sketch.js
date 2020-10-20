// 小手調べ
function setup() {
  createCanvas(100,100);
  stroke(255, 0, 0);
  for(let i = 0; i < 5; i++){

  let x = 10 *( 10 - i);
  ellipse(50, 50, x, x);
  }
  for(let i = 5; i < 10; i++){
  stroke(0, 0, 255);
  let x = 10 *( 10 - i);
  ellipse(50, 50, x, x);
  }

}
