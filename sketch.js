const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var boy;
var tree,treeImage;
var chain;
var boyImage;
var mango,mango2,mango3,mango4,mango5,mango6;

function preload()
{
  treeImage = loadImage("tree.png")
  boyImage = loadImage("boy.png")
  
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

  mango = new Mango(600,400);
  mango2 = new Mango(700,350);
  mango3 = new Mango(750,350);
  mango4 = new Mango(750,400);
  mango5 = new Mango(670,400);
  mango6 = new Mango(800,400);

	
	ground = new Ground(600,height,1200,100)

	rock = new Rock(100,400,50,50);


  chain = new Chain(rock.body,{x:100,y:550})
  
  
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
	
	Engine.run(engine);
  Render.run(render);
	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  image(treeImage,550,250,400,400)
  image(boyImage,70,500,150,150)
 
  ground.display();

  rock.display();

  chain.display();

  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  detectollision(rock,mango);
  detectollision(rock,mango2);
  detectollision(rock,mango3);
  detectollision(rock,mango4);
  detectollision(rock,mango5);
  detectollision(rock,mango6);
  drawSprites();
}
function mouseDragged() {
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY})
  }
  function mouseReleased() {
      chain.fly();
  }

  function detectollision(lrock,lmango){
    mangoBodyPosition = lmango.body.position
    rockBodyPosition = lrock.body.position

    var distance = dist(rockBodyPosition.x, rockBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
      if(distance<=lmango.r+lrock.r)
      {
        Matter.Body.setStatic(lmango.body,false);
      }
  }


