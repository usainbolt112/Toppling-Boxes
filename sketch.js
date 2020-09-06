//namespacing
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,box;

function setup() {
  createCanvas(400,400);
  engine= Engine.create();
  world= engine.world;
var options= {
  isStatic: true
}
  ground= Bodies.rectangle(200,390,400,20,options);
  World.add(world,ground);

  box1= new Box(200,300,50,50);

  box2= new Box(240,100,50,70);
}

function draw() {
  background(0);  
  Engine.run(engine);
  rectMode(CENTER);
   rect(ground.position.x,ground.position.y,400,20);
    box1.display();
    box2.display();
}