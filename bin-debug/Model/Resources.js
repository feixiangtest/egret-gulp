var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * @author
 *
 */
var Resources = (function () {
    /**
     * 资源
     */
    function Resources(name, chinese) {
        this.name = name;
        this.chinese = chinese;
        this.isOver = false;
    }
    return Resources;
}());
__reflect(Resources.prototype, "Resources");
