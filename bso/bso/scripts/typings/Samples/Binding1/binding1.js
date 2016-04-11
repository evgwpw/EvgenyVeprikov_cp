var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../bso/bootstrapcss.ts" />
/// <reference path="../../bso/bootstrapcss.ts" />
/// <reference path="../../bso/bso.ts" />
/// <reference path="../../bso/bootstrapcss.ts" />
/// <reference path="../../bootstrap.datepicker/bootstrap.datepicker.d.ts" />
var data = {
    FirstName: 'Семен',
    LastName: 'Горбунков',
    BirthDay: new Date(1941, 08, 27)
};
var Binder1 = (function (_super) {
    __extends(Binder1, _super);
    function Binder1(srcData) {
        _super.call(this, srcData);
        this.srcData = srcData;
    }
    return Binder1;
})(Binder);
var binder = new Binder1(data);
var binding1 = div(function (t) { t.style.width = '200px'; }, function () { return inputText(function (t) {
    binder.BS(t, function (x) { return x.value; }, function (x) { return x.FirstName; });
    t.className = bootstrapCss.form_control;
}); }, function () { return br(); }, function () { return inputText(function (t) {
    binder.BS(t, function (x) { return x.value; }, function (x) { return x.LastName; });
    t.className = bootstrapCss.form_control;
}); }, function () { return br(); }, function () { return div(EmptyAction, function () { return inputText(function (t) {
    t.className = bootstrapCss.form_control;
    var dp = $(t).datetimepicker({
        autoclose: true,
        format: "dd.mm.yyyy",
        language: "ru",
        todayBtn: true,
        startView: 2,
        minView: 2,
        showClear: true,
        showClose: true,
        pickTime: false
    })
        .data('datetimepicker');
    binder.BC(t, function (t) { return binder.Data.BirthDay; }, function (t) { return dp.getDate(); }, function (e) {
        dp.setDate(binder.Data.BirthDay);
    });
    dp.setDate(binder.srcData.BirthDay);
}); }, function () { return br(); }, function () { return button(function (t) {
    t.textContent = 'Button1';
    t.onclick = function (me) {
        var obj = binder.Data;
        var str = JSON.stringify(obj);
        alert(str);
    };
}); }); });
$(document).ready(function () {
    $('body')[0].appendChild(binding1);
});
//# sourceMappingURL=binding1.js.map