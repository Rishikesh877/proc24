class Ball{
constructor(x,y,radius){
    var option= {
  restitution:1.2,
 //friction:0.01,
  density:1.5,

  }
this.body=Matter.Bodies.circle(x,y,radius,option)
World.add(world,this.body)
this.radius=radius;



}


display(){
push();
translate(this.body.position.x, this.body.position.y)
rotate(this.body.angle) 
    ellipseMode(RADIUS);
    ellipse(0,0, this.radius, this.radius);
pop();


}






}