
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,ground1;
var d,d1,d2,d3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball1 = new Ball(40,329,40)
ground1=new Ground(200,690,1200,25)
d=new Dustbin(650,667,20,100)
d1=new Dustbin(600,628,100,20)
b2=new Dustbin(700,628,100,20)
//b3=new Dustbin(700,628,100,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  Engine.update(engine)



  ball1.display();
ground1.display();
d.display();
d1.display();
b2.display();

//keyPressed();
  drawSprites();
 
}
function keyPressed(){
  if(key === UP_ARROW){
    Matter.body.appleyForce(ball1.body,ball1.body.position,{x:150,Y:-150})
  }
}


