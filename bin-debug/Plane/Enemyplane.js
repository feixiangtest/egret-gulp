var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 *
 * @author
 *
 */
var Enemyplane = (function (_super) {
    __extends(Enemyplane, _super);
    function Enemyplane() {
        return _super.call(this) || this;
    }
    /**
    * 创建敌军
    */
    Enemyplane.prototype.init = function (x, y) {
        var enmyplanlist = ["GodPlane_png", "GreenPlane_png", "JitPlane_png", "JpPlane_png", "LiPlane_png", "LXPlane_png"];
        var planeIndex = Math.floor(Math.random() * enmyplanlist.length);
        var plane = new Plane();
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
    };
    return Enemyplane;
}(egret.DisplayObjectContainer));
__reflect(Enemyplane.prototype, "Enemyplane");
