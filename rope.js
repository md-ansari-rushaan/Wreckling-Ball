class Rope{
    constructor(bodyA,pointB){
        var options={
            pointB:pointB,
            bodyA:bodyA,
            stiffness:1.2,
            length:250
        }
        this.pointB = pointB;
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
    
    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(3);
            stroke(48,22,8);
            line(pointB.x,pointB.y,pointA.x,pointA.y);
            pop();
        }
    }
};