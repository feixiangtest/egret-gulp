class ChildrenObject extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        console.log('aaa')
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }
    private onAddToStage(event:egret.Event){
        let spr:egret.Sprite = new egret.Sprite();
        this.addChild(spr);
        let spr1:egret.Sprite = new egret.Sprite();
        spr1.graphics.beginFill(0x00ff00);
        spr1.graphics.drawRect(0,0,100,100);
        spr1.graphics.endFill();
        spr1.x = 50;
        spr1.name = '50';
        spr.addChild(spr1);
        let _spr:egret.DisplayObject = spr.getChildAt(0);
        _spr.scaleX = 0.5;
    }
}

