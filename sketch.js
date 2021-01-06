
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin,garbage;
var ground;
var dustbin2,dustbin3;
function setup() {
	createCanvas(1000, 500);
   

   
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin = new Dustbin(555,200,250,30)
    garbage = new Garbage(100,200,25,25)
    // left one
	dustbin2 = new Dustbin(400,200,30,300,PI/2)
	//right side is this one
	dustbin3 = new Dustbin(605,200,30,300,PI/2)
	ground = new Ground(400,490,1200,20)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  dustbin.display();
  garbage.display();
  dustbin2.display();
  dustbin3.display();
}



