class Stone extends BaseClass{
    constructor(x, y) {
        var options = {
            isStatic :false,
            restitution : 0,
            friction :1,
            density:1.2
        }
      super(x,y,50,50,options);
      this.image = loadImage("assets/stone.png");
    }
  }