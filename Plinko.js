class Plinko {
    constructor(x,y,r){
      this.x=x;
      this.y=y;
      this.r=r;
    }
  
    display() {
     
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        
        
        pop();
      
  
      
      }
    }
  
  