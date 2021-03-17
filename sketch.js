
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ball1=new Ball(400,550,30)
	
	rope1=new SlingShot(ball1.body,{x:402,y:350})
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ball1.display();
 rope1.display();
}
function keypressed(){
if(keycode===32)
Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-180,y:10})

}


