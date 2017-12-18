let phi;
let r;
let n = 0;
let c = 8;

function setup() {
    createCanvas(900, 900);
    background(51);
}

function draw() {
    translate(width/2, height/2);

    phi = n * 137.5;
    r = c * sqrt(n);

    let x = r * cos(phi);
    let y = r * sin(phi);

    stroke(0);
    ellipse(x, y, 10, 10);

    n++;
}
