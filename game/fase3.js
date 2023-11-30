var fase3Completa = false;
timer = 20;
console.log("iniciar fase");
console.log(iniciarFase3);

function playerMovement() {
  // console.log("x: " + player.x + "\n y: " + player.y);
  player.shapeColor = "black";
  if (keyDown("up")) {
    player.y -= 10;
  }
  if (keyDown("down")) {
    player.y += 10;
  }
  if (keyDown("right")) {
    player.x += 10;
  }
  if (keyDown("left")) {
    player.x -= 10;
  }
}

function fase3() {
  playerMovement();
  background("#5adeff");

  nuvem1.velocityY = 5;
  nuvem2.velocityY = 5;
  nuvem3.velocityY = 5;
  birdfase3.velocityY = 10;

  if (nuvem1.y >= 900) {
    nuvem1.y = -100;
  }
  if (nuvem2.y >= 1000) {
    nuvem2.y = -200;
  }
  if (nuvem3.y >= 900) {
    nuvem3.y = -500;
  }
  if (birdfase3.y >= 900) {
    birdfase3.y = -100;
    birdfase3.x = random(20, 580);
  }

  player.addImage(fase3Player);

  if (keyDown("b") && !fase3Completa) {
    console.log("fase 3 completa");
    fase3Completa = true;
  }
  text(timer, 50, 50);

  if (frameCount % 60 === 0) {
    timer -= 1;
  }

  if (player.isTouching(birdfase3)) {
    timer = 20;
    birdfase3.y = -100;
    birdfase3.x = random(20, 580);
  }
  if (timer <= 0 && !fase3Completa) {
    console.log("fase 3 completa");
    fase3Completa = true;
    player.x = 500;
    player.y = 750;
  }

  drawSprites();
}
