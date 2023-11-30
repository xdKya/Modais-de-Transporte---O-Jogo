var fase5Completa = false;

function playerMovement() {
  console.log("x: " + player.x + "\n y: " + player.y);
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

function fase5() {
  playerMovement();
  background(prototipo5);

  if (keyDown("d") && !fase5Completa) {
    console.log("fase 5 completa");
    fase5Completa = true;
  }

  drawSprites();
}
