class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.009,
            length: 10
        }
        this.pointB = pointB
        this.Launcher= Constraint.create(options);
        World.add(world, this.Launcher);
    }
    
    attach(body)
    {
        this.sling.bodyA=body;
    
    }

        fly(){
            this.Launcher.bodyA = null;
        }

        display(){
            var pointA = this.Launcher.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            fill("black");
            line(pointA.x, pointA.y, pointB.x, pointB.y, fill());
        
    }

}







