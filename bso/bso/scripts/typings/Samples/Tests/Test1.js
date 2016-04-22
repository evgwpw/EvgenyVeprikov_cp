/// <reference path="../../bso/bso.ts" />
var Test1 = (function () {
    function Test1() {
    }
    Test1.prototype.Element = function () {
        var _this = this;
        return div(EmptyAction, function () { return label(function (t) { _this.label = t; }); }, function () { return button(function (t) {
            t.textContent = 'Кнопка1';
            t.onclick = function (me) {
                _this.label.textContent = 'Хвост';
            };
        }); });
    };
    return Test1;
})();
window.onload = function (ev) {
    var e = new Test1().Element();
    document.body.appendChild(e);
    e.childNodes[1].click();
    var text = e.childNodes[0].textContent;
    if (text == 'Хвост') {
        alert('Тест прошел');
    }
    else {
        alert('Тест не прошел');
    }
};
//# sourceMappingURL=Test1.js.map