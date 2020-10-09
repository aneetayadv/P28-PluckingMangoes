class Mango extends BaseClass {
    constructor(x, y) {
        var options = {
            isStatic :true,
            restitution : 0,
            friction :1,
        }
      super(x,y,40,40,options);
      this.image = loadImage("assets/mango.png");
    }
  }

 
 