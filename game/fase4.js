var fase4Completa = false;

function playerMovement() {
  console.log("x: " + player.x + "\n y: " + player.y);
  player.shapeColor = "black";
  if (keyDown("up")) {
    player.y -= 10;
    player.mirrorY(1);
  }
  if (keyDown("down")) {
    player.y += 10;
    player.mirrorY(-1);
  }
  if (keyDown("right")) {
    player.x += 10;
  }
  if (keyDown("left")) {
    player.x -= 10;
  }
}

function fase4() {
  background(fase4bg);

  if (keyDown("c") && !fase4Completa) {
    console.log("fase 4 completa");
    fase4Completa = true;
  }

  player.addImage(fase4Player);

  playerMovement();

  if (player.isTouching(checkPoint4) && !fase4Completa) {
    console.log("fase 4 completa");
    fase4Completa = true;
    player.x = -500;
    player.y = -500;
  }
  drawSprites();
}
