let drawColor;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(240, 240, 240);
    stroke(255);
    fill('red');
    rect(2, 2,40,40);
    fill('orange');
    rect(2, 42,40,40);
    fill('yellow');
    rect(2, 80,40,40);
    fill('green');
    rect(2, 120,40,40);
    fill('cyan');
    rect(2, 160,40,40);
    fill('blue');
    rect(2, 200,40,40);
    fill('magenta');
    rect(2, 240,40,40);
    fill('brown');
    rect(2, 280,40,40);
    fill('white');
    rect(2, 320,40,40);
    fill('black');
    rect(2, 360,40,40);
  }
  
function draw() {
    
}

function mouseClicked() {
  if(mouseX < 41)
  {
    if(mouseY < 41) 
    {
      drawColor = 'red';
    } else if(mouseY < 81)
    {
      drawColor = 'orange';
    } else if(mouseY < 121)
    {
      drawColor = 'yellow';
    } else if(mouseY < 161)
    {
      drawColor = 'green';
    } else if(mouseY < 202)
    {
      drawColor = 'cyan';
    } else if(mouseY < 241)
    {
      drawColor = 'blue';
    } else if(mouseY < 282)
    {
      drawColor = 'magenta';
    } else if(mouseY < 322)
    {
      drawColor = 'brown';
    } else if(mouseY < 362)
    {
      drawColor = 'white';
    } else if(mouseY < 402)
    {
      drawColor = 'black';
    }
  } else {
    fill = drawColor;
    ellipse(mouseX, mouseY, 1, 1);
  }
}

function mouseDragged() {
  stroke(drawColor)
  if (mouseX > 55 || mouseY > 431) {
    strokeWeight(10);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

