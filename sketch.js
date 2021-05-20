const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObj, paperObject,groundObject;	
var world;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
    world = engine.world;
	
	paperObject=new Ball(200,450,70);
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new Box(1200,650);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine)
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();

  fill("black");
  textSize(25);
  text("NOTE: Added up and down arrow controls for forward and backward movement.", 50, 50);

}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
    
  	}

  	if (keyCode === DOWN_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:-130,y:-145});
    
  	}
}
