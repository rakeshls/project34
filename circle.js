class Circle{
    constructor(x,y){
        var options = {
          isStatic: true,
          density: 7.8,
          friction : 0,
          restitution: 1.3
        }
        this.body = Bodies.circle(x,y,8,options);
        this.r = 8;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push ();
        translate(pos.x,pos.y);
        rotate (angle);
        fill("#fff");
        noStroke();
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop ();
    }
}