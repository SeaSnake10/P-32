
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground;
var wall1,wall2,wall3;
var ball;
var bg = "o.png";
var backgroundImg;
var score = 0;

function preload(){
    getBackgroundImg();
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(350,690,1900,10);
    platform1 = new Ground(450,400,250,10);
    platform2 = new Ground(1000,350,250,10);
	
	block1 = new Can(401,350,30,45);
	block2 = new Can(431,350,30,45);
	block3 = new Can(453,350,30,45);
    block4 = new Can(485,350,30,45);
	block5 = new Can(431,250,30,45);
	block6 = new Can(453,250,30,45);
    block7 = new Can(950,250,30,45);
	block8 = new Can(981,250,30,45);
	block9 = new Can(1012,250,30,45);
    block10 = new Can(1043,250,30,45);
    block11 = new Can(981,150,30,45);
	block12 = new Can(1012,150,30,45);
	ball = new Paper(150,350,30,30);

    sling = new Launcher(ball.body,{x:150,y:350})

	Engine.run(engine);
  
}


function draw() {
    if(backgroundImg)
    background(backgroundImg);

    noStroke();
    textSize(35)
    fill("white")
    text("Score  " + score, width-300, 50)
  rectMode(CENTER);
  ground.display();
  platform1.display();
  platform2.display();
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  ball.display();
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=09){
        bg = "o.png";
    }
    else{
        bg = "k.png";
    }

    backgroundImg = loadImage(bg);
    
}
































