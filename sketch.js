const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var platform;
var polygon;
var stone1,stone2,stone3,stone4,stone5,stone6,stone7,stone8,stone9;

function setup() {
  var canvas = createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  platform = new Platform(650,350,100,10);
   
}

function draw() {
  background(255,255,255);  
  
  platform.display();
}