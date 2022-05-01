
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var richside;
var leftside;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground =new Ground(200,670,1200,20);
	wall1 = new Ground(500,600,20,120);
	wall2 = new Ground(700,600,20,120);
	var ball_options ={
		isStatic:false,
		restitution:0.3,
		friction:-1,
		density:1.5
	  }
	  ball = Bodies.circle(100,100,10,ball_options);
  World.add(world,ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  wall1.show();
  wall2.show();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:10,y:-0.01});
		}
	}
