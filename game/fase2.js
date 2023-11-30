var fase2Completa = false;

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

function fase2() {
  background("white");
  background(fase2bg);
  player.shapeColor = "blue";

  player.addImage(fase2Player);

  player.scale = 0.2;
  player.debug = false;
  player.setCollider("rectangle", 0, 0, 450, 500);

  player.collide(edges);
  playerMovement();

  if (player.collide(boxFase2)) {
    boxFase2.x = random(20, 580);
    boxFase2.y = random(20, 780);
    boxCount -= 1;
  }

  if (boxCount <= 0 && !fase2Completa) {
    console.log("fase 2 completa");
    fase2Completa = true;
    player.x = 400;
    player.y = 400;
  }

  drawSprites();
}
