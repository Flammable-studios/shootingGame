// Project Title Shooting Demo
// Your Name Jayson

// player position variables
let pX = 50;
let pY = 200;

// projectile positions


function setup() {
    createCanvas(600, 400);
    background(240);
}

function draw() {
    background(240);
    noStroke()

    movePlayer();

    drawPlayer(pX, pY);

    // drawProjectiles();
}

function drawPlayer(x, y) {
    fill('green');
    ellipse(x, y, 40, 80);
}

function movePlayer() {
    if (keyIsDown(83) || keyIsDown(40)) { // w & arrow up key
        pY += 5;
    }
    if (keyIsDown(87) || keyIsDown(38)) { // s & arrow down key
        pY -= 5;
    }
}

function keyPressed() {
    print(keyCode);
}

//update and draw projectiles
function drawProjectiles() {
    fill('red');


} 
