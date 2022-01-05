class Ball{
    constructor(){
        this.x=200;
        this.y=200;
        this.r=20;
        this.vx=3;
        this.vy=1;
    }
    update(){
      if(this.y>height || this.y<0){
          this.vy=this.vy*-1
      }
    }
    move(){
        this.y+=this.vy
        this.x+=this.vx
    }
    show(){
        fill(255,0,150)
        ellipse(this.x,this.y,this.r)
    }
    reset(){
        this.x=200;
        this.y=200;
    }
}