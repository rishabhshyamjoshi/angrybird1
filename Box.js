class Box{
    constructor(x,y,w,h){
        var options={
            isStatic : true
              }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width = w;
        this.height = h;
       
        World.add(world,this.body);  
     
}
    display(){
        rectMode(CENTER);
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        fill("127");
        strokeWeight(4);
        stroke("blue");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);

    } 
}