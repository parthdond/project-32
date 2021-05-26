class Block  {
    constructor(x,y,width,height)  {
        var options={
            isStatic:false
        }
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.visibility=255;

        World.add(world,this.body)

    }
    display()  {
        
        if(this.body.speed<3){
            push();
            translate(this.body.position.x, this.body.position.y);
            rectMode(CENTER);
            fill(220);
            tint(200,100,20);
            rect(0, 0, this.width, this.height);
            pop();
          }
          

    }
}