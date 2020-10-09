
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var boy,boyImg;
var ground,backgroundImg;
var tree,treeImg;
var stone,launcherObj;
var mango1,mango2,mango3,mango4,mango5;
var randomX,randomY;

function preload()
{
	boyImg = loadImage("assets/boy.png");
	backgroundImg  = loadImage("assets/bg.png");
	treeImg = loadImage("assets/tree.png");
}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,590,1200);

/*	boy = createSprite(width/4,480);
	boy.addImage("boyImage",boyImg);
	boy.scale = 0.2;

	tree = createSprite(950,350);
	tree.addImage("treeImage",treeImg);
	tree.scale = 0.4;*/

	stone = new Stone(150,450);

	mango1 = new Mango(880,350);
	mango2 = new Mango(950,290);
	mango3 = new Mango(920,330);
	mango4 = new Mango(930,390);

	mango5 = new Mango(1010,255);
	mango6 = new Mango(1015,300);
	mango7 = new Mango(970,350);
	mango8 = new Mango(1100,350);

	mango9 = new Mango(1030,345);
	mango10 = new Mango(1025,395);
	mango11 = new Mango(1045,295);
//	mango12 = new Mango(850,395);

	launcherObj=new Launcher(stone.body,{x:155,y:450})
}


function draw() {

  background(backgroundImg);

  Engine.update(engine);

  image(boyImg,120,380,200,280);
  image(treeImg,850,230,300,370);
  //drawSprites();

  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
 // mango12.display();

  launcherObj.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
 // detectCollision(stone,mango12);

  text(mouseX +","+ mouseY,mouseX,mouseY);
}

function mouseDragged()
{
	Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
	launcherObj.fly();
}

function detectCollision(objStone,objMango)
{
	var pointA = objStone.body.position;
	var pointB = objMango.body.position;
	var distance = dist(pointA.x, pointA.y, pointB.x, pointB.y);
	if(distance <= objStone.width/2 + objMango.width/2)
	{
		Body.setStatic(objMango.body,false);
	}
}

function keyPressed()
{
	if(keyCode === 32)
	{
		Body.setPosition(stone.body,{x:155,y:450});
		launcherObj.attach(stone.body);
	}
}