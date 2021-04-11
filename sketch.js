const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

//var bob1,bob2, bob3, bob4, bob5;
var ground, box1;
var stand;
var balls = [];

function setup() {
  createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.

  box1 =new Box(500,440,50,50);
  ground = new Ground(500,490,1000,20);
  stand = new Ground(500,470,100,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(123,230,45);

  
  ground.display();
  stand.display();
  box1.display();

  if(frameCount%60===0){
    balls.push(new Ball(random(width/2-300, width/2+300), 10,10));
  }
 
  for (var j = 0; j < balls.length; j++) {
    balls[j].display();
  }
  

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(box1.body,box1.body.position,{x:12, y:-10})
	}
	
}