const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = []; 
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);

  //create division objects
  for (var j = 0; j <= width; j=j + 80) {
    divisions.push(
      new Divisions(j, height - divisionHeight / 3, 10, divisionHeight)
    );
  }
  for (var j = 0; j<= 160; j=j + 160) {
    divisions.push(
      new Divisions(j, height - divisionHeight / 3, 10, divisionHeight)
    );
  }
  for (var j= 0; j <= 240; j=j + 240) {
    divisions.push(
      new Divisions(j, height - divisionHeight / 3, 10, divisionHeight)
    );
  }
  for (var j = 0; j <= 320; j=j + 320) {
    divisions.push(
      new Divisions(j, height - divisionHeight / 3, 10, divisionHeight)
    );
  }
  for (var j = 0; j<= 400; j = j + 400) {
    divisions.push(
      new Divisions(j, height - divisionHeight / 3, 10, divisionHeight)
    );
  }
  for (var j = 0; j<= 480; j=j + 480) {
    divisions.push(
      new Divisions(j, height - divisionHeight / 3, 10, divisionHeight)
    );
  }
  for (var j = 0; j <= 560; j=j + 560) {
    divisions.push(
      new Divisions(j, height - divisionHeight / 3, 10, divisionHeight)
    );
  }
  for (var j= 0; j <= 640; j=j + 640) {
    divisions.push(
      new Divisions(j, height - divisionHeight / 3, 10, divisionHeight)
    );
  }
  for (var j= 0; j<= 720; j = j + 720) {
    divisions.push(
      new Divisions(j, height - divisionHeight / 3, 10, divisionHeight)
    );
  }
  for (var j = 0; j <= 800; j = j + 800) {
    divisions.push(
      new Divisions(j, height - divisionHeight / 3, 10, divisionHeight)
    );
  }

  //create 1st row of plinko objects
  for (var i = 75; i <= width; i=i + 50) {
    plinkos.push(new Plinko(i, 75));
  }

  //create 2nd row of plinko objects
  for (var i = 50; i<= width - 10; i= i + 50) {
    plinkos.push(new Plinko(i, 175));
  }

  //create 3rd row of plinko objects
  for (var i = 40; i <= width; i = i + 50) {
    plinkos.push(new Plinko(i, 275));
  }

  //create 4th row of plinko objects
  for (var i = 15; i <= width - 10; i = i + 50) {
    plinkos.push(new Plinko(i, 375));
  }
}

function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("orange");

  ground.display();

  //display the plinkos
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  //display the divisions
  for (var j = 0; j< divisions.length; j++) {
    divisions[j].display();
  }

  //particles
  if (frameCount %60===0) {
    particles.push(new Particle(random(0,800),0,8));
  }
  for (var k = 0; k < particles.length; k++) {
    particles[k].display();
  }
}
