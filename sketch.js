
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var  ball; 
var ground;
var leftWall, rightWall;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;
  
	var ballOptions = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.
    ball = Bodies.circle (50,30,20,ballOptions);
	World.add(world, ball);

    ground = new Ground(600,380,1200,10);
	leftWall= new Ground(900,310,20,120);
	rightWall = new Ground(1100,310,20,120);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x, ball.position.y, 20);
  
  ground.display();
  leftWall.display();
  rightWall.display();

  drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		
		Matter.Body.applyForce(ball,ball.position, {x:85,y:-85});
	}
}

