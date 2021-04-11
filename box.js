class Box{
    constructor(x,y,width,height){
        
        var options = {
            isStatic: true,
            Restitution: 0.3,
            density: 0.3
        }
        this.width = width;
        this.height = height;
        this.bImage = loadImage("dustbingreen.png");
        this.body = Bodies.rectangle(x,y,width,height, options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER)
        fill("black");
        image(this.bImage,pos.x,pos.y,this.width,this.height);
        pop();
    }
}
