// Project Title Shooting Demo

// Your Name Jayson

// variables

let pX = 50;
let pY = 200;
let enemyX = 550;
let enemyY = 200;
let headShot;
let score = 0;

// projectile positions
let projectileXs = [];
let projectileYs = [];

function preload() {
    soundFormats('mp3')
    headShot = loadSound('Headshot.mp3')
}
function setup() {
    createCanvas(600, 400);
    background(240);
    rectMode(CENTER);
}

function draw() {
    background(240);
    noStroke()

    movePlayer();

    drawPlayer(pX, pY);

    drawProjectiles();

    rect(enemyX, enemyY, 50, 100);
    fill('black');
    text("Score: " + score, 10, 20);
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
    for (let i = 0; i < projectileXs.length; i += 1) {
        ellipse(projectileXs[i], projectileYs[i], 5, 2);
        projectileXs[i] += 5;
        //Delete projectile
        if (projectileXs[i] > 650) {
            projectileXs.splice(i, i);
            projectileYs.splice(i, i);
        }
        //collision
        if (abs(projectileXs[i] - enemyX) < 27.5) {
            if (abs(projectileYs[i] - enemyY) < 51) {
                projectileXs.splice(i, i);
                projectileYs.splice(i, i);
                background('red');
                enemyX = random(300, 550);
                enemyY = random(50, 350);
                headShot.play();
                score += 1;
            }
        }
    }
}

function mousePressed() {
    projectileXs.push(pX + 20);
    projectileYs.push(pY);
    print(projectileXs);
    print(projectileYs);
}