var div1 = <HTMLDivElement>document.getElementById('div1');
var w = div1.getBoundingClientRect().width;
var s1 = div1.getClientRects();
setInterval(() =>
{
    w = w + 100;
    div1.style.width = w + 'px';
}, 1000);


