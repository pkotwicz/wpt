// META: timeout=long
// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.drawImage.nowrap
// Description:Stretched images do not get pixels wrapping around the edges
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Stretched images do not get pixels wrapping around the edges");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var canvas = new OffscreenCanvas(100, 50);
var ctx = canvas.getContext('2d');

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
fetch('/images/redtransparent.png')
  .then(response => response.blob())
    .then(blob => {
      createImageBitmap(blob)
        .then(bitmap => {
        ctx.drawImage(bitmap, -1950, 0, 2000, 50);
        _assertPixelApprox(canvas, 45,25, 0,255,0,255, 2);
        _assertPixelApprox(canvas, 50,25, 0,255,0,255, 2);
        _assertPixelApprox(canvas, 55,25, 0,255,0,255, 2);
    });
});
t.done();

});
done();