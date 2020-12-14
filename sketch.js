const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var engine,world;

var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;

var chain1,chain2,chain3,chain4,chain5;

var circle1,circle2,circle3,circle4,circle5;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();

  let options = {
    mouse : canvasmouse
  }

  mConstraint = MouseConstraint.create(engine,options);
  World.add(world,mConstraint);
  
  pendulum1 = new  Pendulum(610,410, "#ff0000 ");
  pendulum2 = new Pendulum(695,410, "#ff0000");
  pendulum3 = new Pendulum(780,410,"#ff0000");
  pendulum4 = new Pendulum(865,410,"#ff0000");
  pendulum5 = new Pendulum(950,410,"#ff0000");

  chain1 = new Chain(pendulum1.body,{x:610,y:85});
  chain2 = new Chain(pendulum2.body,{x:695,y:85});
  chain3 = new Chain(pendulum3.body,{x:780,y:85});
  chain4 = new Chain(pendulum4.body,{x:865,y:85});
  chain5 = new Chain(pendulum5.body,{x:950,y:85});

  circle1 = new Circle(610,85);
  circle2 = new Circle(695,85);
  circle3 = new Circle(780,85);
  circle4 = new Circle(865,85);
  circle5 = new Circle(950,85);

}

function draw() {
  background(0);
  Engine.update(engine);

  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  circle1.display();
  circle2.display();
  circle3.display();
  circle4.display();
  circle5.display();

  drawSprites();
  text(mouseX+" "+mouseY,mouseX,mouseY);
}
function mouseDragged(){
  Matter.Body.setPosition(pendulum1.body,{x: mouseX, y: mouseY });
}