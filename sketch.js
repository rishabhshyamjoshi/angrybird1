const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

var ground;
var box1;
let bird;
let world, engine;
let mConstraint;
let slingshot;

var box;


function setup() {
  const canvas = createCanvas(711, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width / 2, height - 10, width, 20);

  box = new Box(450,75, 84, 100);

  box1 = new Box(450,105,84,100);
  bird = new Bird(150, 300, 25);

  slingshot = new SlingShot(150, 300, bird.body);

  const mouse = Mouse.create(canvas.elt);
  const options = {
    mouse: mouse
    
      
  }

  mouse.pixelRatio = pixelDensity();
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);


}

function keyPressed() {
  if (key == ' ') {
    World.remove(world, bird.body);
    bird = new Bird(150, 300, 25);
    slingshot.attach(bird.body);
  }
}

function mouseReleased() {
  setTimeout(() => {
    slingshot.fly();
  }, 100);
}

function draw() {
  background(255);
  Engine.update(engine);
  ground.show();
  box.show();
  slingshot.show();
  box1.show();
  bird.show();
}
