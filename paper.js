class Paper {
    constructor(x, y,width,height) {
      var options = {
          isStatic:false,
          restitution:0.8,
          friction:0.3,
          density:1.2
      }
      this.body = Bodies.rectangle(x, y,30,30, options);
      this.width = 70;
      this.height = 70;
      this.image = loadImage("hex2.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0, 0, 40, 40);
      
    }
  };