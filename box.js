class Box{
    constructor(x,y){
        var options={
           isStatic:true 
        }
    this.bbody = Bodies.rectangle(950,660,200,20,options);
    this.lbody = Bodies.rectangle(850,600,20,100,options);
    this.rbody = Bodies.rectangle(1050,600,20,100,options);
    World.add(world,this.rbody);
    World.add(world,this.bbody);
    World.add(world,this.lbody);

        
    }
 display(){
     var posB = this.bbody.position;
     var posL = this.lbody.position;
     var posR = this.rbody.position;

     rectMode(CENTER);
     rect(posB.x,posB.y,200,20);
     rect(posL.x,posL.y,20,100);
     rect(posR.x,posR.y,20,100);
    }
 


}