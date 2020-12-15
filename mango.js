class Mango {
    constructor(x,y){
      
      var options={ 
        isStatic:true,
        restitution:0,
        friction:1,
      }
      this.x = x;
      this.y = y;
      this.r = 40;
    
      this.image = loadImage("mango.png");
      this.body = Bodies.circle(this.x,this.y,20,options);
      World.add(world, this.body);
    }
  
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    imageMode(CENTER);
    image(this.image,0,0,this.r,this.r)
    pop();
    
  }
}
