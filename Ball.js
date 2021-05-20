class Ball {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution:0.5,
          friction:1,
          density:1.5
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.image = loadImage("paper.png");
      this.body = Bodies.circle(this.x, this.y, (this.r-20)/2, options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      rotate(angle)
      strokeWeight(4);
      stroke('red');
      fill('yellow');
      image(this.image, 0, 0, this.r, this.r);
      pop();
    }
  }