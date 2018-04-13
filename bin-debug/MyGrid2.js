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
var MyGrid2 = /** @class */ (function (_super) {
    __extends(MyGrid2, _super);
    function MyGrid2() {
        var _this = _super.call(this) || this;
        _this.drawGrid();
        return _this;
    }
    MyGrid2.prototype.drawGrid = function () {
        this.graphics.beginFill(0x00ffff);
        this.graphics.drawRect(0, 0, 50, 50);
        this.graphics.endFill();
        this.graphics.beginFill(0x0000ff);
        this.graphics.drawRect(50, 50, 50, 50);
        this.graphics.endFill();
        this.graphics.beginFill(0xff0000);
        this.graphics.drawRect(50, 0, 50, 50);
        this.graphics.endFill();
        this.graphics.beginFill(0xff0000);
        this.graphics.drawRect(0, 50, 50, 50);
        this.graphics.endFill();
    };
    return MyGrid2;
}(egret.Shape));
