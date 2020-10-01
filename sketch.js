var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var box1;
var box2;
var box3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	var canvas = createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution: 0.2, isStatic:true});
	World.add(world, packageBody);

	console.log(ground)

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic: true} );
	 World.add(world, ground);
	 
	
	console.log(ground)

	

	box1 = createSprite (375,660,160,10);
	box1Body = Bodies.rectangle(375,660,160,10,{isStatic: true} )
    World.add(world,box1Body);

	box2 = createSprite (300,610, 10, 100)
	box2Body = Bodies.rectangle(300,610, 10, 100,{isStatic: true})
    World.add(world,box2Body);

	box3 = createSprite (455,615,10,100)
	box3Body = Bodies.rectangle(455,615,10,100,{isStatic: true})
   World.add(world,box3Body);
    
   Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  //box1.display();
  //box2.display();
  //box3.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
  }
}



