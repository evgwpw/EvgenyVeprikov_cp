/// <reference path="../../bso/bso.ts" />
var SecondsElapsed = div(t=>
{
    var counter = 0;
    setInterval(() =>
    {
        t.innerText = 'Seconds Elapsed: ' + counter++;
    }, 1000);
});