
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("seaImg");
spriteName.addImage(seaImg);
// codigo para redefinir o plano de fundo 
if (sea.x < 0){
  sea.x = sea.width/2;
}
}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
    drawSprites();

 
}
