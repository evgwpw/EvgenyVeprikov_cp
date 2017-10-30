/// <reference path="../../bso/bso.ts" />
var SecondsElapsed = div(function (t) {
    var counter = 0;
    setInterval(function () {
        t.innerText = 'Seconds Elapsed: ' + counter++;
    }, 1000);
});
//# sourceMappingURL=SecondsElapsed.js.map