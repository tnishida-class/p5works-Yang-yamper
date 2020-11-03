// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  balloon("I love keyakizaka46",130,0,0,0,200,200);
}

function balloon(t,c,r,g,b,x,y){
  background(c);
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 5;
  fill(r,g,b);
  ellipse(x, y, w + p * 5, h + p * 5 );
  fill(255);
  text(t, x - w / 2, y + p );
  fill(0)
  noStroke()
  beginShape()
  vertex(x - h,y + h )
  vertex(x,y + h)
  vertex(x - h * 2, y + 50)
  endShape()
}
