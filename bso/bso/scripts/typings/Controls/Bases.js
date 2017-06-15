"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../bso/bso.ts" />
/**
 * Контейнер для нескольких панелей
 */
var SplitContainer = (function () {
    function SplitContainer() {
    }
    return SplitContainer;
}());
exports.SplitContainer = SplitContainer;
var BsoArray = (function (_super) {
    __extends(BsoArray, _super);
    function BsoArray() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BsoArray.prototype.Add = function (el) {
        return this.push(el);
    };
    BsoArray.prototype.Insert = function (index, el) {
        if (index < 0 || index >= this.length)
            throw new BsoError("Индекс находится за пределами диапазонов массива");
        return this.splice(index, 0, el);
    };
    BsoArray.prototype.Delete = function (index) {
        if (index < 0 || index >= this.length)
            throw new BsoError("Индекс находится за пределами диапазонов массива");
        return this.splice(index, 1);
    };
    return BsoArray;
}(Array));
exports.BsoArray = BsoArray;
/**
 * Контейнер для строк
 */
var ElementRowsCollection = (function (_super) {
    __extends(ElementRowsCollection, _super);
    function ElementRowsCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ElementRowsCollection;
}(BsoArray));
exports.ElementRowsCollection = ElementRowsCollection;
/**
 * все строки в одном столбце, но у разных строк разное количество ячеек
 */
var ElementColumn = (function (_super) {
    __extends(ElementColumn, _super);
    function ElementColumn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ElementColumn;
}(BsoArray));
exports.ElementColumn = ElementColumn;
var ElementCollection = (function () {
    function ElementCollection() {
    }
    return ElementCollection;
}());
exports.ElementCollection = ElementCollection;
/**
 *
 */
function Test() {
    var ec = new ElementColumn();
    ec[1][2].onload = function (ev) {
        alert(ev.srcElement.innerHTML);
    };
}
//# sourceMappingURL=Bases.js.map