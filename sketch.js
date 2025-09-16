// Project Title Shooting Demo
// Your Name Jayson

// player position variables
let pX = 50;
let pY = 200;

// projectile positions


function setup()
{
    createCanvas(600, 400);
    background(240);
}

function draw()
{
    background(240);
    noStroke()

    movePlayer();

    drawPlayer();

    // drawProjectiles();
}

function drawPlayer(x, y)
{
    fill('green');
    ellipse(x, y, 40, 80);
}

function movePlayer()
{
    if (keyIsDown(87))
    { // w key
        pY += 5;
    }
    if (keyIsDown(83))
    { // s key
        pY -= 5;
    }
}

function keyPressed()
{
    print(keyCode);
}

//update and draw projectiles
function drawProjectiles()
{
    fill('red');


} 
