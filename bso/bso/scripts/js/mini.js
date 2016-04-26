/// <reference path="../typings/bso/bso.js" />

var Test = (function () {
    function Test() {
        var _this = this;
        this.test = div(function (t) {
            _this.prn = t;
        }, function () {
            return div(EmptyAction, function () {
                return div(EmptyAction, function () {
                    return div(function (x) {
                        _this.prn;
                    });
                });
            });
        });
    }
    return Test;
})();
