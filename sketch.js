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
    createCanvas(900, 900);
    background(51);
}

function draw() {
    translate(width / 2, height / 2);

    phi = n * 137.5;
    r = c * sqrt(n);

    let x = r * cos(phi);
    let y = r * sin(phi);

    stroke(0);

    fill(re, gr, bl);
    ellipse(x, y, 10, 10);

    n++;

    if (re == 255) {

        reI = false;
        re--;

    } else if (re == 0) {

        reI = true;
        re++;

    } else if (re < 255 && reI == true) {

        re++;

    } else if (re > 0 && reI == false) {

        re--;

    }

    if (gr == 255) {

        grI = false;
        gr--;

    } else if (gr == 0) {

        grI = true;
        gr++;

    } else if (gr < 255 && grI == true) {

        gr++;

    } else if (gr > 0 && grI == false) {

        gr--;

    }

    if (bl == 255) {

        blI = false;
        bl--;

    } else if (bl == 0) {

        blI = true;
        bl++;

    } else if (bl < 255 && blI == true) {

        bl++;

    } else if (bl > 0 && blI == false) {

        bl--;

    }
}