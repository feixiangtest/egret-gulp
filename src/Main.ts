class Main extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }
    private onAddToStage(event:egret.Event){      
         console.log(3336623);
         let childrenObj:ChildrenObject = new ChildrenObject();
         this.addChild(childrenObj)
        // let mygrid:MyGrid = new MyGrid();
        // this.addChild(mygrid);  
        // let floor1:Floor1 = new Floor1();
        // this.addChild(floor1);   
    }
}
