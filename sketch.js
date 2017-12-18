// Phyllotaxis
//
// Created by Alexandru Nastase
// Credits to Coding Train: https://www.youtube.com/watch?v=KWoJgHFYWxY
// Reading: http://algorithmicbotany.org/papers/abop/abop-ch4.pdf


let phi;
let r;
let n = 0;
let c = 8;

let re = 255;
let gr = 100;
let bl = 0;

let reI = false;
let grI = true;
let blI = true;


function setup() {
    angleMode(DEGREES);
    createCanvas(900, 900);
    background(51);
}

function draw() {
    translate(width / 2, height / 2);

    phi = n * 137.5;
    r = c * sqrt(n);

    // Convert polar to cartesian
    let x = r * cos(phi);
    let y = r * sin(phi);

    stroke(0);
    fill(re, gr, bl);
    ellipse(x, y, 10, 10);

    n++;

    // New colour values
    reCol = newCol(re, reI);
    re = reCol[0];
    reI = reCol[1];

    grCol = newCol(gr, grI);
    gr = grCol[0];
    grI = grCol[1];

    blCol = newCol(bl, blI);
    bl = blCol[0];
    blI = blCol[1];
}

function newCol(col, inc) {

    if (col == 255) {

        inc = false;
        col--;

    } else if (col == 0) {

        inc = true;
        col++;

    } else if (col < 255 && inc == true) {

        col++;

    } else if (col > 0 && inc == false) {

        col--;

    }

    return [col, inc];
}