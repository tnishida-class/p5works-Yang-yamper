// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if(i % 2 == 0&& j% 2 == 0){
        fill(256)
      }
      else if(i % 2 == 1&& j% 2 == 1){
        fill(256)

      }
      else{
        fill(196)
      }
    rect(size*i,size*j,25,25);
    if(i % 2 == 0&&j % 2 == 1&&j < 3){
      fill(256,0,0)
    }
    else if(i % 2 == 1&&j % 2 == 0&&j < 3){
      fill(256,0,0)
    }
    else if(i % 2 == 0&&j % 2 == 1&&j > 4&&j < 9){
      fill(0)
    }
    else if(i % 2 == 1&&j % 2 == 0&&j > 4&&j < 9){
      fill(0)
    }
    else{
      noFill(0);
    }
      ellipse(size*i+12.5,size*j+12.5,15);
    }
  }

}
