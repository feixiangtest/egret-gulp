/**
 *
 * @author 
 *
 */
class Enemyplane extends egret.DisplayObjectContainer
{
    public constructor()
    {
        super();
    }

    /**
    * 创建敌军
    */
    public init(x: number,y: number): Plane
    {
        var enmyplanlist = ["GodPlane_png","GreenPlane_png","JitPlane_png","JpPlane_png","LiPlane_png","LXPlane_png"];
        var planeIndex = Math.floor(Math.random() * enmyplanlist.length);
        var plane: Plane = new Plane();
        var planeImage = new egret.Bitmap(RES.getRes(enmyplanlist[planeIndex]));
        plane.blood = 100;
        plane.bulletImage = "bullet_02_png";
        plane.Image = planeImage;
        plane.Image.rotation = 180;
        plane.Image.x = x + 128;
        plane.Image.y = y + 128;
        plane.X = plane.Image.x;
        plane.Y = plane.Image.y;
        plane.Type = "Donw";
        plane.lives = 3;
        return plane;
    }
}
