var ball,ball_img,paddle,paddle_img

function preload() {
//images of ball and paddle to be preloaded
  
  ball_img = loadImage("ball.png");
  paddle_img = loadImage("paddle.png");
}
function setup() {
  createCanvas(500, 400);
  
 // creating sprites for ball & paddle  
  ball = createSprite(200,200,20,20);
  paddle = createSprite(250,250,20,20);
  
  // assigning the images to the sprites 
  ball.addImage("ball image",ball_img);
  paddle.addImage("paddle image",paddle_img);

  // assigning ball a initial X velocity of 9
  ball.velocityX = 7;

}

function draw() {
  background(205,153,0);
  // creation of Edge Sprites 
  edges = createEdgeSprites();

  // bouncing of ball from left,top,bottom edges
 ball.bounceOff(edges[0]);
 ball.bounceOff(edges[2]);
 ball.bounceOff(edges[3]); 

  //  bouncing off of ball from paddle
 ball.bounceOff(paddle,randomVelocity);
  
// stopping paddle from going out of the canvas
  paddle.bounceOff(edges);
  
  if(keyDown(UP_ARROW))
  {
    
     // paddle going down with down key
     paddle.y = paddle.y - 20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    
    // paddle going down with down key
    paddle.y = paddle.y + 20;
  }
  drawSprites();
  
}

/* this function will be called when ball bounces paddle */

function randomVelocity()
{
   // random Y velocity for the ball 
  
  ball.velocityY = Math.round(random(3,7));
}

