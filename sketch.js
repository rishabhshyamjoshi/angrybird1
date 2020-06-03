
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,box;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world

  ground = new Ground(200,380,400,5);
  box = new Box(50,200,20,20);

  var options={
    bodyA:ground,
    bodyB:box,
    stiffness:0.04,
    length:10
  }
  var chain = Constraint.create(options);
  World.add(world,chain);

}

function draw() {
  background(0); 
  Engine.update(engine);
  ground.display();
  box.display();

  strokeWeight(4);
  line(box.position.x,box.position.y,ground.position.x,ground.position.y);


}









