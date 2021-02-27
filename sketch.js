const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var backgroundImg;

function preload(){
  getBackgroundImg();
}
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var ground_options = {isStatic:true};
  ground = Bodies.rectangle(200, 390, 200, 20,ground_options);
  World.add(world,ground);
  var ball_options = {restitution:0.8};
  ball = Bodies.circle(200, 100, 20, ball_options);
  World.add(world,ball);
  
}
function draw() {
  if(backgroundImg){
  background(backgroundImg);
  }
  Engine.update(engine); 
  rectMode(CENTER);
 rect(ground.position.x, ground.position.y, 400, 20);
ellipseMode(RADIUS);
ellipse(ball.position.x, ball.position.y, 20, 20);
}

async function getBackgroundImg(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var dateTime = responseJSON.datetime;
  var hour = dateTime.slice(11,13);
  if(hour>=05 && hour<=15){
  bg = "bg.png";
  }
  else{bg = "bg2.jpg"}
  
  backgroundImg = loadImage(bg);
  }