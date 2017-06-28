var div1 = document.getElementById('div1');
var w = div1.getBoundingClientRect().width;
var s1 = div1.getClientRects();
setInterval(function () {
    w = w + 100;
    div1.style.width = w + 'px';
}, 1000);
//# sourceMappingURL=Test2.js.map