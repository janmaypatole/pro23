class Garbage{
    constructor(x,y,width,height){
    var options={
     'restitution':0.5,
     'friction':0.7,
     'density':0.3
    }
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.width = width;
    this.height = height;
    World.add(world,this.body)
} 
  display(){
    var pos = this.body.position
    var angle = this.body.angle
    pos.x=mouseX
    pos.y=mouseY
    push();
   translate(pos.x,pos.y)
   rotate(angle)
   strokeWeight(6)
   stroke("blue")
   rectMode(CENTER)
  
   rect(0,0,this.width,this.height)
    pop();
}
}

