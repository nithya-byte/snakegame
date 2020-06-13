var snake;
var food;
function setup() {
  createCanvas(800,400);
  snake=createSprite(400,200,10,100);
}

function draw() {
  background(255,255,255);  

  if(food==undefined)
  {
 createFoodForSnake();
  }
  if(food!=undefined)
  {
    if(snake.isTouching(food))
    {
      food.destroy();
      food= undefined;
    }
  }

  if(keyDown(UP_ARROW))
  {
    snake.y=snake.y-1;
  }
  if(keyDown(DOWN_ARROW))
  {
    snake.y=snake.y+1;
  }
  if(keyDown(RIGHT_ARROW))
  {
    snake.x=snake.x+1;
  }
  if(keyDown(LEFT_ARROW))
  {
    snake.x=snake.x-1;
  }

  
    drawSprites();
}
function createFoodForSnake()
{
  if(frameCount%50==0)
  {
    food=createSprite(200,200,50,50);
    food.shapeColor=("red");
  }
}