class Can {
    constructor(x, y, width, height) {
      var options = {
          isStatic:false,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("box2.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
	      imageMode(CENTER);
	      fill(28, 170, 222 );
	      image(this.image,pos.x, pos.y, this.width, this.height);
        console.log(this.body.speed)


        if((this.body.speed)>8){
          World.remove(world,this.body)
          this.image = loadImage(bg)
          push();
          pop();
        }
    }};
