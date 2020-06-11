const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var bird1;
var pig1,pig2;
var log1,log2,log3,log4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    log1= new Log(810,260,300,PI/2);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    
    ground = new Ground(600,height,1200,20)
    bird1 = new Bird(200,100);
    pig1 = new Pig(810,350);
   // pig2 =  new Pig(810,300);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(bird1.body.position.x);
    console.log(bird1.body.position.y);
    box1.display();
    box2.display();
    ground.display();
    bird1.display();
    pig1.display();
   // pig2.display();
    log1.display();
}