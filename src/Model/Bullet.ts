/**
 *
 * @author 
 *
 */
class Bullet
{
    /*
     * 子弹
     */ 
    public constructor()
    {
    }
    //子弹X轴
    public X: number;
    //子弹Y轴
    public Y: number;
    //子弹类型
    public Type: string;
    //谁发出的子弹
    public Plane: Plane;
    //子弹图片
    public Image: egret.Bitmap;
    //子弹声音
    public bulletSound: egret.Sound;
}
