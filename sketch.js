
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

var ground;
var basket;
var paper;

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,550,width,10);
	basket = new Basket(1000,540,200,20);
	basket1 = new Basket(900,500,20,100);
	basket2 = new Basket(1100,500,20,100);
	paper = new Paper(100,540,40,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  basket2.display();
  basket.display();
  basket1.display();
  paper.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:1000, y:540});
		console.log("eafgsafa");
	}
}



