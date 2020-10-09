class Ground extends BaseClass{
    constructor(x,y,w){
        var options = {
            isStatic :true
        }
        super(x,y,w,20,options);
        this.width = w;
        this.height = 20;
    }

    display()
    {
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        super.display();
    }
}