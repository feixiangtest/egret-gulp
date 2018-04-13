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
var ChildrenObject = /** @class */ (function (_super) {
    __extends(ChildrenObject, _super);
    function ChildrenObject() {
        var _this = _super.call(this) || this;
        console.log('aaa');
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    ChildrenObject.prototype.onAddToStage = function (event) {
        var spr = new egret.Sprite();
        this.addChild(spr);
        var spr1 = new egret.Sprite();
        spr1.graphics.beginFill(0x00ff00);
        spr1.graphics.drawRect(0, 0, 100, 100);
        spr1.graphics.endFill();
        spr1.x = 50;
        spr1.name = '50';
        spr.addChild(spr1);
        var _spr = spr.getChildAt(0);
        _spr.scaleX = 0.5;
    };
    return ChildrenObject;
}(egret.DisplayObjectContainer));
