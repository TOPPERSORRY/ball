class Ball {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density : 1.2,
          

      }
     
      this.body = Bodies.circle(x,y,radius,[options])
      
      this.x = 250;
      this.y = 620;
      this.radius = 5;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill ("pink")
      rect(pos.x, pos.y, this.width, this.height);
    }
  }