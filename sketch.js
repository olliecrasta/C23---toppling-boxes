const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
console.log(1);

var engine, world, box1,ground;
function setup() {
  canvas = createCanvas(400,400);
  console.log(1);
  engine = Engine.create();
  world = engine.world;
  box1 = new Box(200,250,50,50);
  box2 = new Box(240,50,50,100);
  ground = new Ground(200, height-100 ,400,10);
}

function draw() {
  background(0);

  Engine.update(engine);



  box1.display();
  box2.display();
  ground.display();
}