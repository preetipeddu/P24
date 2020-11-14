
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperBall;
var dustbin1, dustbin2, dustbin3;
var ground;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paperBall = new Paper(40,490,5);
  dustbin1  = new Dustbin(600,500,190,20);
  dustbin2 = new Dustbin(495,460,20,100);
  dustbin3 = new Dustbin(685,460,20,100);
  ground = new Ground(400,520,800,20);

  Engine.run(engine);

     
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  paperBall.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();

}

function keyPressed(){
   if(keyCode === UP_ARROW){
      Matter.Body.applyForce(paperBall.body, paperBall.position,{x:85,y:-85})

   }


}



