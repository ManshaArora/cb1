class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };

  function keyPressed(){
      if (keyCode === UP_ARROW){
          MutationObserver.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
      }
  }