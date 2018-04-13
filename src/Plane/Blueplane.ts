/**
 *
 * @author 
 *
 */
class Blueplane extends egret.DisplayObjectContainer
{

    public constructor()
    {
        super();
    }

    /**
     * 创建主角
     */
    public init(s: egret.DisplayObjectContainer): Plane
    {
        var plane: Plane = new Plane();
        var planeImage = new egret.Bitmap(RES.getRes("BluePlane_png"));
        plane.blood = 100;
        plane.bulletImage = "bullet_03_png";
        plane.Image = planeImage;
        plane.Type = "UP";
        plane.lives = 0;
        var sound: egret.Sound = RES.getRes("bullet_mp3");
        plane.bulletSound = sound;
        this.BottomCenter(plane,s);
        planeImage.touchEnabled = true;
        s.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.PlaneMoveHandle,[plane,s]);
        s.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.PlaneMoveHandle,[plane,s]);
        return plane;
    }
    /**
     * 飞机移动处理
     */
    private PlaneMoveHandle(e: egret.TouchEvent): void
    {
        var plane: Plane = this[0];
        if(plane.Image == null) return;
        var parent = this[1];
        var hight = plane.Image.height;
        var wight = plane.Image.width;
        plane.Image.x = e.stageX - (wight / 2);
        plane.Image.y = e.stageY - (hight / 2);
        if(plane.Image.x <= 0)
        {
            plane.Image.x = 0;
        }
        if(e.stageX + wight / 2 >= parent.stage.stageWidth)
        {
            plane.Image.x = parent.stage.stageWidth - wight;
        }
        if(plane.Image.y <= 0)
        {
            plane.Image.y = 0;
        }
        if(e.stageY + hight / 2 >= parent.stage.stageHeight)
        {
            plane.Image.y = parent.stage.stageHeight - hight;
        }
        plane.X = plane.Image.x;
        plane.Y = plane.Image.y;
    }

    /**
     * 初始默认底部居中位子
     */
    private BottomCenter(bit: Plane,s: egret.DisplayObject): void
    {
        var mapHight = s.stage.stageWidth;
        var mapwight = s.stage.stageHeight;
        var hight = bit.Image.height;
        var wight = bit.Image.width;
        bit.X = (mapHight / 2) - (bit.Image.width / 2);
        bit.Y = mapwight - bit.Image.height;
        bit.Image.x = (mapHight / 2) - (bit.Image.width / 2);
        bit.Image.y = mapwight - bit.Image.height;
    }
}
