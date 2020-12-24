class Chain{
    constructor(bodyA,bodyB){
    var options={
    bodyA:bodyA,
    bodyB:bodyB,
    length:50,
    stiffness:1.0,
    }
        this.chain=Matter.Constraint.create(options);
    World.add(world,this.chain);
    }

    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position
    stroke("black");
        strokeWeight(5);
    line (pointA.x,pointA.y,pointB.x,pointB.y)
    }
}

