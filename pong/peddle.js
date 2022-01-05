class Peddle{
    constructor(x){
        this.x=x;
        this.y=200;
        this.w=20;
        this.h=100;
        this.vy=0;
    }
    update(){
        if(this.y>=height-50 || this.y<50){
            this.vy=this.vy*-1;
        }
    }

    dir(y){
        this.vy=y;
    }

    move(){
        this.y+=this.vy
    }
    show(){
        fill("purple")
        rectMode(CENTER)
        rect(this.x,this.y,this.w,this.h);
    }
}