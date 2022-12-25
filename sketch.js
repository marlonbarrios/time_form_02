const canvasSketch = require('canvas-sketch');
const p5 = require('p5');
new p5()


let hRadius;
let mRadius;
let sRadius;
let timeAm;
let timePm;

const settings = {
  pixelsPerInch: 300,
  p5: true,
  duration: 3,
  animate: true,
  dimensions: [1024, 1024],
  bleed: 1 / 8,
};

canvasSketch(() => {
  angleMode(DEGREES);
  noCursor();

  return ({
    playhead,
    width,
    height
  }) => {
    background(255, 10);
    translate(width / 2, height / 2);
    rotate(-90);
    let hr = hour();
    let mn = minute();
    let sc = second();


    noStroke();
    strokeWeight(sc + 1);
    stroke(180);
    noFill();
    let secondAngle = map(sc, 0, 60, 0, 360);
    sRadius = width * 0.9;
    arc(0, 0, sRadius, sRadius, 0, secondAngle);
    push();
    rotate(secondAngle);
    line(0, 0, sRadius / 2, 0);
    pop();



    strokeWeight(mn + 7);
    stroke(100);
    let minuteAngle = map(mn, 0, 60, 0, 360);
    mRadius = width * 0.6;
    arc(0, 0, mRadius, mRadius, 0, minuteAngle);
    push();
    rotate(minuteAngle);
    line(0, 0, mRadius / 2, 0);
    pop();



    strokeWeight((hr + 5) * 4);
    stroke(10);
    let hourAngle = map(hr % 12, 0, 12, 0, 360);
    hRadius = width * 0.3;
    arc(0, 0, hRadius, hRadius, 0, hourAngle);
    push();
    rotate(hourAngle);
    line(0, 0, hRadius / 2, 0);
    pop();

    noStroke();

    if (hr > 12) {

      timePm = map(hr, 0, 12, 255, 0);
      fill(timePm);
      ellipse(0, 0, width * 0.09, width * 0.09);

    } else {

      timeAm = map(hr, 0, 12, 0, 255);
      fill(timeAm);
      ellipse(0, 0, width * 0.09, width * 0.09);
    }


  }
}, settings);
