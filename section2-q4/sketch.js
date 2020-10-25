// ギリシャ国旗
function setup() {
  const blue = color(0, 51, 160);
  createCanvas(270, 180);
  background(255);
  stroke(255)
  let d = height / 9; 

  for(let i = 0; i < 9; i++){
    if( i % 2 == 0 ){
      fill(blue)
    }
    else{
      fill(255)
    }

    rect(0, i * d, width, (i + 1) * d);
  }

  fill(blue);
  let size = d * 5;
  rect(0, 0, size, size);

  fill(255);
  rect(0, 2 * d, size, d )
  rect( 2 * d, 0, d, size)
}
