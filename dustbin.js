class Dustbin{
    constructor(x,y,height,width){
        var options={
       isStatic: true
        }
        this.body=Bodies.rectangle(x,y,height,width,options)
        this.height=height
        this.width=width
        World.add(world,this.body);
    }
    display(){
    var pos =this.body.position;
    push();  
    //translate(pos.x,pos.y)
    rectMode(CENTER)
    fill("white")
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
    pop();
    
    }
    
    
    
    
    }