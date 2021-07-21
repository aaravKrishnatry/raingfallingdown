var umbrellaImage
var drops=[];

const Engine=Matter.Engine;
const World=Matter.World
const Bodies=Matter.Bodies
function preload(){
   
 umbrellaImage=loadAnimation("images/Walking Frame/walking_1.png" ,"images/Walking Frame/walking_2.png", "images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png", "images/Walking Frame/walking_6.png", "images/Walking Frame/walking_7.png", "images/Walking Frame/walking_8.png") 
thunder1=loadImage("images/thunderbolt/1.png");
thunder2=loadImage("images/thunderbolt/2.png");
thunder3=loadImage("images/thunderbolt/3.png");
thunder4=loadImage("images/thunderbolt/4.png")
}


function setup(){
   engine=Engine.create();
   world=engine.world;
   createCanvas(400,625);
  umbrella=new Umbrella(200,300,50) ;
  batman=createSprite(200,450);
  batman.addAnimation("walking", umbrellaImage);
  batman.scale=0.45;

if (frameCount%150===0){
    console.log("in")
    for(var i=0;i<100;i++)
    {
        drops.push(new Drop(random(0,400),random(100,-200)))
    }
}



  
}

function draw(){
    Engine.update(engine)
    background(0)
    umbrella.display();
    for(var i=0;i<100;i++){
        drops[i].showDrop();
        drops[i].updateY();
    }
drawSprites()
}   

