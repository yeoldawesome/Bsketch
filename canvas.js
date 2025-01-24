var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");

var x = innerWidth / 3;
var dx = 0;
var radius = 200;
var y = innerHeight / 4;
var dy = 10;
var re = 0;

var p = 0;
var cancle = animate;

function animate() {
  requestAnimationFrame(cancle);

  var select1 = Math.floor(Math.random() * 255) + 0;
  var select2 = Math.floor(Math.random() * 255) + 0;
  var select3 = Math.floor(Math.random() * 255) + 0;
  var c11 = select1;
  var c21 = select2;
  var c31 = select3;

  c.fillStyle = "rgb(" + c31 + "," + c21 + "," + c11 + ",1)";
  c.fillRect(x, y, 50, 50);

  if (y - radius > 450 && re == 0) {
    dx = 10;
    dy = 0;
    re += 1;
  }
  if (x - radius > 650 && re == 1) {
    dy = 10;
    re += 1;
  }
  if (y - radius > 100 && re == 2) {
    dx = 0;
    dy = -10;

    re += 1;
  }

  if (y - radius < 250 && re == 3) {
    dx = -10;
    dy = 0;
    setTimeout(function () {
      dx = 0;
      cancle = "a";
    }, 490);

    re += 1;

    document.onkeydown = function begin(e) {
      if (e.keyCode == 13) {
        c.clearRect(0, 0, innerWidth, innerHeight);
        cancle = "a";
        game();
      }
    };
    c.font = "20px Arial";
    c.textAlign = "center";
    c.fillStyle = "black";
    c.fillText("Push Enter to Begin, B Doodle", innerWidth / 2, 50);
    c.fillText(
      "B= Big box,  L= Second Player On , N=Default box, M= Little box, V= Clear, Z= Slow, C= Default, X= Fast, H= Help",
      innerWidth / 2,
      100
    );
    c.fillText(
      "1= Red, 2= Green, 3= Blue, 4= Light Blue, 5= Pink, 6= Orange, 7= Yellow, 8= Black, 9= Erase, 0= Random",
      innerWidth / 2,
      150
    );
    c.fillText("Use Arrow Keys To Move", innerWidth / 2, 200);
  }

  x += dx;
  y += dy;
}
animate();

function game() {
  console.log(
    "B= Big box,  L= Second Player On , N=Default box, M= Little box, V= Clear, Z= Slow, C= Default, X= Fast"
  );
  console.log(
    "1= Red, 2= Green, 3= Blue, 4= Light Blue, 5= Pink, 6= Orange, 7= Yellow, 8= Black, 9= Erase, 0= Random"
  );
  console.log("Use arrow keys to move");
  var u = innerWidth / 2;
  var s = innerHeight / 2;
  var u2 = 100;
  var s2 = 100;
  var j = 100;
  var sp = 3;
  draw();
  draw2();
  var LEFT = false;
  var RIGHT = false;
  var UP = false;
  var DOWN = false;
  var LEFT2 = false;
  var RIGHT2 = false;
  var UP2 = false;
  var DOWN2 = false;
  var he = 2;
  var helpp = 0;

  document.onkeyup = function (e) {
    if (e.keyCode == 37) LEFT = false;
    if (e.keyCode == 39) RIGHT = false;
    if (e.keyCode == 38) UP = false;
    if (e.keyCode == 40) DOWN = false;
    if (e.keyCode == 65) LEFT2 = false;
    if (e.keyCode == 68) RIGHT2 = false;
    if (e.keyCode == 87) UP2 = false;
    if (e.keyCode == 83) DOWN2 = false;
  };
  console.log();
  document.onkeydown = function (e) {
    if (e.keyCode == 65) LEFT2 = true;
    if (e.keyCode == 68) RIGHT2 = true;
    if (e.keyCode == 87) UP2 = true;
    if (e.keyCode == 83) DOWN2 = true;
    if (e.keyCode == 37) LEFT = true;
    if (e.keyCode == 39) RIGHT = true;
    if (e.keyCode == 38) UP = true;
    if (e.keyCode == 40) DOWN = true;
    if (e.keyCode == 77) j = 10;
    if (e.keyCode == 78) j = 100;
    if (e.keyCode == 66) j = 500;
    if (e.keyCode == 86) c.clearRect(0, 0, innerWidth, innerHeight);
    if (e.keyCode == 90) sp = 2;
    if (e.keyCode == 88) sp = 1;
    if (e.keyCode == 67) sp = 3;
    if (e.keyCode == 49) t = 3;
    if (e.keyCode == 50) t = 4;
    if (e.keyCode == 51) t = 5;
    if (e.keyCode == 52) t = 2;
    if (e.keyCode == 53) t = 1;
    if (e.keyCode == 54) t = 8;
    if (e.keyCode == 55) t = 7;
    if (e.keyCode == 56) t = 9;
    if (e.keyCode == 57) t = 6;
    if (e.keyCode == 48) t = 0;
    if (e.keyCode == 76) t = 11;
    if (e.keyCode == 72)
      alert(
        "B= Big box,  L= Second Player Off , N=Default box, M= Little box, V= Clear, Z= Slow, C= Default, X= Fast, 1= Red, 2= Green, 3= Blue, 4= Light Blue, 5= Pink, 6= Orange, 7= Yellow, 8= Black, 9= Erase, 0= Random, Use Arrow Keys To Move"
      );
  };
  function move() {
    if (LEFT) {
      u -= 10;
      draw();
    }
    if (RIGHT) {
      u += 10;
      draw();
    }
    if (UP) {
      s -= 10;
      draw();
    }
    if (DOWN) {
      s += 10;
      draw();
    }
  }
  function move2() {
    if (LEFT2) {
      u2 -= 10;
      draw2();
    }
    if (RIGHT2) {
      u2 += 10;
      draw2();
    }
    if (UP2) {
      s2 -= 10;
      draw2();
    }
    if (DOWN2) {
      s2 += 10;
      draw2();
    }
  }

  setInterval(updae, 35);
  function updae() {
    if (sp == 3) {
      move();
      move2();
    }
  }
  setInterval(upda, 100);
  function upda() {
    if (sp == 2) {
      move();
      move2();
    }
  }
  setInterval(upae, 10);
  function upae() {
    if (sp == 1) {
      move();
      move2();
    }
  }
  setInterval(look, 10);
  function look() {
    if (t == 2) {
      block1 = 68;
      block2 = 166;
      block3 = 198;
    }
    if (t == 3) {
      block1 = 255;
      block2 = 0;
      block3 = 0;
    }
    if (t == 4) {
      block1 = 0;
      block2 = 255;
      block3 = 0;
    }
    if (t == 5) {
      block1 = 0;
      block2 = 0;
      block3 = 255;
    }
    if (t == 6) {
      block1 = 255;
      block2 = 255;
      block3 = 255;
    }
    if (t == 7) {
      block1 = 255;
      block2 = 255;
      block3 = 0;
    }
    if (t == 8) {
      block1 = 255;
      block2 = 165;
      block3 = 0;
    }
    if (t == 9) {
      block1 = 0;
      block2 = 0;
      block3 = 0;
    }
    if (t == 1) {
      block1 = 231;
      block2 = 84;
      block3 = 128;
    }
    if (t == 2) {
      block12 = 68;
      block22 = 166;
      block32 = 198;
    }
    if (t == 3) {
      block12 = 255;
      block22 = 0;
      block32 = 0;
    }
    if (t == 4) {
      block12 = 0;
      block22 = 255;
      block32 = 0;
    }
    if (t == 5) {
      block12 = 0;
      block22 = 0;
      block32 = 255;
    }
    if (t == 6) {
      block12 = 255;
      block22 = 255;
      block32 = 255;
    }
    if (t == 7) {
      block12 = 255;
      block22 = 255;
      block32 = 0;
    }
    if (t == 8) {
      block12 = 255;
      block22 = 165;
      block32 = 0;
    }
    if (t == 9) {
      block12 = 0;
      block22 = 0;
      block32 = 0;
    }
    if (t == 1) {
      block12 = 231;
      block22 = 84;
      block32 = 128;
    }
    if (t == 11) {
      block12 = 255;
      block22 = 255;
      block32 = 255;
    }
  }
  var t = 0;

  var block1 = true;
  var block2 = true;
  var block3 = true;
  var block12 = true;
  var block22 = true;
  var block32 = true;
  function draw2() {
    var c12 = Math.floor(Math.random() * 255) + 0;
    var c22 = Math.floor(Math.random() * 255) + 0;
    var c32 = Math.floor(Math.random() * 255) + 0;
    if (t == 0) {
      block12 = c12;
      block22 = c22;
      block32 = c32;
    }
    c.fillStyle = "rgb(255,255,255,1)";
    if(t == 11){

      c.fillStyle = "rgb(" + block1 + "," + block2 + "," + block3 + ",1)";

    }
    c.fillRect(u2, s2, j, j);
  }

  function draw() {
    var c1 = Math.floor(Math.random() * 255) + 0;
    var c2 = Math.floor(Math.random() * 255) + 0;
    var c3 = Math.floor(Math.random() * 255) + 0;
    if (t == 0) {
      block1 = c1;
      block2 = c2;
      block3 = c3;
    }
    c.fillStyle = "rgb(" + block1 + "," + block2 + "," + block3 + ",1)";
    c.fillRect(u, s, j, j);
  }
}
