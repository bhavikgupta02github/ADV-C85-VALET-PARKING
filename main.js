canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//greencar_x = 75;
//greencar_y = 325;
greencar_x = 5;
greencar_y= 225;

function add() {
bgi=new Image();
bgi.onload=uploadbg;
bgi.src=background_image;
cari=new Image();
cari.onload=uploadcar;
cari.src=greencar_image;
}
function uploadbg(){
   ctx.drawImage(bgi,0,0,canvas.width,canvas.height);
}
function uploadcar(){
    ctx.drawImage(cari,greencar_x,greencar_y,greencar_width,greencar_height);
 }

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == '38')
{
up();
console.log("up");
}

if(keyPressed == '40')
{
down();
console.log("down");
}

if(keyPressed == '37')
{
left();
console.log("left");
}

if(keyPressed == '39')
{
right();
console.log("right");
}


}
function up(){
  if(greencar_y>=0){
  greencar_y=greencar_y-10;
  uploadbg()
  uploadcar()
  }
}
function down(){
    if(greencar_y<=350){
    greencar_y=greencar_y+10;
    uploadbg()
    uploadcar()
    }
  }
  function left(){
    if(greencar_x>=0){
    greencar_x=greencar_x-10;
    uploadbg()
    uploadcar()
    }
  }
  function right(){
    if(greencar_x<=750){
    greencar_x=greencar_x+10;
    uploadbg()
    uploadcar()
    }
  }