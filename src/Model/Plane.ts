/**
 *
 * @author 
 *
 */
class Plane
{
    //血量
    public blood: number;
    //飞机对象
    public Image: egret.Bitmap;
    //X轴
    public X: number;
    //Y轴
    public Y: number;
    //子弹类型
    public Type: string;
    //子弹声音
    public bulletSound: egret.Sound;
    //子弹模型
    public bulletImage: string;
    //开枪
    public Shoot(): Bullet
    {
        var bullet: Bullet = new Bullet();
        bullet.Type = this.Type;
        bullet.Image = new egret.Bitmap(RES.getRes(this.bulletImage));
        bullet.Image.width = 64;
        bullet.Image.height = 64;
        bullet.Plane = this;
        if(this.Type == "Donw")
        {
            bullet.Image.rotation = 180;
            bullet.X = this.X + 31 - (this.Image.width / 2);
            bullet.Y = this.Y + 60;
        } else
        {
            if(this.Image!=null){
                bullet.bulletSound = this.bulletSound;
                bullet.X = this.X + (this.Image.width / 2 - 35);
                bullet.Y = this.Y - 45;
            }
        }
        bullet.Image.x = bullet.X;
        bullet.Image.y = bullet.Y;
        return bullet;
    };
    //硬币
    public lives: number;

}
