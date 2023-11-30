var fase1Completa = false;

if (iniciarFase1) {
  player.x = 300;
  player.y = 750;
}

function playerMovement() {
  // console.log("x: " + player.x + "\n y: " + player.y);

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

function fase1() {
  playerMovement();
  background("white");
  background(fase1bg);

  //criar colisoes e deixar invisivel
  player.collide(block1);
  block1.visible = false;
  player.collide(block2);
  block2.visible = false;
  player.collide(block3);
  block3.visible = false;
  player.collide(block4);
  block4.visible = false;
  player.collide(block5);
  block5.visible = false;
  player.collide(block6);
  block6.visible = false;
  player.collide(block7);
  block7.visible = false;
  player.collide(block8);
  block8.visible = false;
  player.collide(block9);
  block9.visible = false;
  player.collide(block10);
  block10.visible = false;
  player.collide(block11);
  block11.visible = false;
  player.collide(block12);
  block12.visible = false;
  player.collide(block13);
  block13.visible = false;
  player.collide(block14);
  block14.visible = false;
  player.collide(block15);
  block15.visible = false;
  player.collide(block16);
  block16.visible = false;
  player.collide(block17);
  block17.visible = false;
  player.collide(block18);
  block18.visible = false;
  player.collide(block19);
  block19.visible = false;
  player.collide(block20);
  block20.visible = false;
  player.collide(block21);
  block21.visible = false;
  player.collide(block22);
  block22.visible = false;
  player.collide(block23);
  block23.visible = false;
  player.collide(block24);
  block24.visible = false;
  player.collide(block25);
  block25.visible = false;
  player.collide(block26);
  block26.visible = false;
  player.collide(block27);
  block27.visible = false;
  player.collide(block28);
  block28.visible = false;
  player.collide(block29);
  block29.visible = false;
  player.collide(block30);
  block30.visible = false;
  player.collide(block31);
  block31.visible = false;
  player.collide(block32);
  block32.visible = false;
  player.collide(block33);
  block33.visible = false;
  player.collide(block34);
  block34.visible = false;
  player.collide(block35);
  block35.visible = false;
  player.collide(block36);
  block36.visible = false;
  player.collide(block37);
  block37.visible = false;
  player.collide(block38);
  block38.visible = false;
  player.collide(block39);
  block39.visible = false;
  player.collide(block40);
  block40.visible = false;
  player.collide(block41);
  block41.visible = false;
  player.collide(block42);
  block42.visible = false;
  player.collide(block43);
  block43.visible = false;
  player.collide(block44);
  block44.visible = false;
  player.collide(block45);
  block45.visible = false;
  player.collide(block46);
  block46.visible = false;
  player.collide(block47);
  block47.visible = false;
  player.collide(block48);
  block48.visible = false;
  player.collide(block49);
  block49.visible = false;
  player.collide(block50);
  block50.visible = false;
  player.collide(block51);
  block51.visible = false;
  player.collide(block52);
  block52.visible = false;
  player.collide(block53);
  block53.visible = false;
  player.collide(block54);
  block54.visible = false;
  player.collide(block55);
  block55.visible = false;
  player.collide(block56);
  block56.visible = false;
  checkPoint1.visible = false;
  player.addImage(fase1Player);
  player.scale = 0.05;
  player.debug = false;
  player.setCollider("rectangle", 0, 0, 450, 500);

  if (player.isTouching(checkPoint1) && !fase1Completa) {
    console.log("fase 1 completa");
    fase1Completa = true;
    player.x = 300;
    player.y = 630;
  }

  drawSprites();
}
