var moving, fixed;

function setup() {
  createCanvas(1200,800);
  
  moving = createSprite(400, 600, 50, 80);
  //moving.velocityX = 4;
  moving.velocityY = -2 ;

  fixed = createSprite(400, 200, 80, 50);
  //fixed.velocityX = -3;
  fixed.velocityY = 2
  moving.debug = true;
  fixed.debug = true;
}

function draw() {
  background(0); 
  
  /* moving.x = mouseX;
  moving.y = mouseY; */

  //COLLISION ALGORITHM
  
  if(fixed.x - moving.x <= moving.width/2 + fixed.width/2
    && moving.x - fixed.x <= moving.width/2 + fixed.width/2 
    && fixed.y - moving.y <= moving.height/2 + fixed.height/2
    && moving.y - fixed.y <= moving.height/2 + fixed.height/2
    ){
    moving.shapeColor = "red";
    fixed.shapeColor = "red";
  }
  else{
    moving.shapeColor = "green";
    fixed.shapeColor = "green";

  }

  //BOUNCE ALGORITHM

  if (fixed.x - moving.x <= moving.width/2 + fixed.width/2
    && moving.x - fixed.x <= moving.width/2 + fixed.width/2 
    ){

      moving.velocityX = - moving.velocityX ;
      fixed.velocityX = - fixed.velocityX ;

  }
   if( fixed.y - moving.y <= moving.height/2 + fixed.height/2
    && moving.y - fixed.y <= moving.height/2 + fixed.height/2){

      moving.velocityY = - moving.velocityY ;
      fixed.velocityY = - fixed.velocityY ;

    }


  drawSprites();
}

/*
ALGORITHMS

  Pre-defined:
    1. isTouching - detects collision
    2. bounceOff - bouncing off objects upon collision
*/
