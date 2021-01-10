
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var spaceship, shaceshipImage;
var backgroundImage;
var asteroid, asteroid2, asteroid1Image, asteroid2Image;

function preload()
{
	shaceshipImage = loadImage("spaceship.png");
	backgroundImage = loadImage("back2.jpg");
	asteroid1Image = loadImage("astter.png");
	asteroid2Image = loadImage("asteroid2.png");
}

function setup() {
	createCanvas(800, 700);
	
	spaceship = createSprite(400, 500);
	spaceship.addImage(shaceshipImage);
	spaceship.scale = 0.2;

	asteroid = createSprite(400, 66);
	asteroid.addImage(asteroid1Image);
	asteroid.scale = 0.2;

	asteroid2 = createSprite(115, 77);
	asteroid2.addImage(asteroid2Image);
	asteroid2.scale = 0.2;
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImage);

  if(keyDown(LEFT_ARROW)){
    spaceship.x = spaceship.x - 3;
  }
  if(keyDown(RIGHT_ARROW)){
    spaceship.x = spaceship.x +3;
  }

  
  
  drawSprites();
 
}
