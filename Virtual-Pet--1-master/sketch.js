//Create variables here
var dog,happydDog,database,foodStock,foodSto;

function preload(){
    	//load images here
  dogImg1 = loadImage("images/dogImg.png");
  dogImg2 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);

  database = firebase.database();
  foodStock = database.ref('food');

  dog = createSprite(250,280,10,10);
  dog.addImage(dogImg1);
  dog.scale = 0.4;
 
}


function draw() {  
background("turquoise");
if(keyWentDown(UP_ARROW)){
  dog.addImage(dogImg2);
  
}
  drawSprites();
  //add styles here
  fill("Black");
  textSize(20);
  
  text("Press Up Arrow Key to feed",70,100);
}
function readStock(data){
  foodSto=data.val();
}

function writeStock(x){
  database.ref('/').update({
    food:x
  })
  }
