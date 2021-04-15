class Ball{
    constructor(x,y,Width,Hieght,angle){
        var options={
            density:1,
            frictionAir:0.005
        }
        this.body = Bodies.rectangle(x,y,Width,Hieght,options);
        World.add(world,this.body);
        this.width=Width;
        this.hieght=Hieght;
    }
    display(){
        var angle=this.body.angle;
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipse(0,0,this.width,this.hieght);
        pop();
    }
};