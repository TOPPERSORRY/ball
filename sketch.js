
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var horzLine;
var vertLine1,vertLine2;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,height,700,20)
	horzLine = new HorzLine(600,680,200,20);
	vertLine1 = new VertLine(490,620,20,150);
	vertLine2 = new VertLine(700,620,20,150)
	ball = new Ball(250,620,5);
	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
	ground.display(); 
	horzLine.display(); 
	vertLine1.display();
	vertLine2.display();
	ball.display();
	
  drawSprites();
// keyPressed();
}
//function keyPressed(){
  //  if(keyCode === UP_ARROW){
     //   Matter.Body.applyForce(ball.body,ball.body.position,{x:20,y:20});
    //}
//}


