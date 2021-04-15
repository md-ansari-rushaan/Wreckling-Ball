class Box{
    constructor(x,y,Width,Height){
        var options={
            "restitution":0.8,
            "friction":1,
            "density":0.04
        }
        this.body=Bodies.rectangle(x,y,Width,Height,options);
        World.add(world,this.body);
        this.width=Width;
        this.height=Height;
    }
    display(){
        var angle=this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill(255);
        rect(0,0,this.width,this.height);
        pop();
    }
};