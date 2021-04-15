class Ground{
    constructor(x,y,Width,Height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,Width,Height,options);
        World.add(world,this.body);
        this.width=Width;
        this.height=Height;
    }
    display(){
        rectMode(CENTER);
        fill("brown");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }

};