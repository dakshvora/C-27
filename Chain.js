class Chain {

constructor(bodyA, bodyB){

var options={

bodyA: bodyA,
bodyB: bodyB,
stiffness: 0.04,
length: 100

}

this.chain= Constraint.create(options);
World.add(world,this.chain);

}


display(){

var posa= this.chain.bodyA.position;
var posb= this.chain.bodyB.position
line(posa.x,posa.y,posb.x,posb.y);
    
}
}
