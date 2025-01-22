

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');


class Circle {
  constructor(x, y, dx, dy, radius,c1,c2,c3,c4) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

        this.r = Math.random()*100;
        this.g =Math.random()*100;
        this.b =Math.random()*100;

  }


  draw() {

    c.strokeStyle = "rgb("+this.r+","+this.g+","+this.b+",.6)";
         c.fillStyle = c.strokeStyle;
           c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.stroke();
    c.fill();
  }



  update() {
    this.draw();



    if (this.x + this.radius > innerWidth || this.x - this.radius <= 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius <= 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
  }
}

//let x = Math.random()*(innerWidth - radius * 2)+radius;
//let y = Math.random()*(innerHeight - radius * 2)+radius;

let circleArray = [];

for (let i = 0; i < 20; i++) {
  let radius = 90;
  let x = innerWidth/2;
  let y = innerHeight/2;
  let dx = (Math.random() - .5);
  let dy =  (Math.random() - .5);
  circleArray.push(new Circle(x, y, dx, dy, radius));

}


function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < 20; i++) {
    circleArray[i].update();

  }
}

animate();
