var bubbles=[]

function setup(){
    createCanvas(windowWidth,windowHeight)
    // for(let i=0;i<10;i++){
    //     let x=random(width)
    //     let y=random(height)
    //     let r=random(10,40)
    //     bubbles[i]=new Bubble(x,y,r)
    // }
    // bubbles[1]=new Bubble(100,100,25)
}
function draw(){
    background(0)
    for(let i=0;i<bubbles.length;i++){
    bubbles[i].show()
    
    bubbles[i].move()
    }
}
class Bubble{
    constructor(x,y,r){
        this.x=x;
        this.y=y;
        this.r=r;
    }
    move(){
        this.x+=random(-10,10)
        this.y+=random(-10,10)
    }
    show(){
        noStroke()
        fill(255,55)
        ellipse(this.x,this.y,this.r)
    }
}
function mouseDragged(){
    let r=random(15,45)
    let b= new Bubble(mouseX,mouseY,r)
    bubbles.push(b)
}