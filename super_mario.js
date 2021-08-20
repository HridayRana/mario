var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["09d50e67-6804-41e9-8256-db1e8bbf527b","1dd7e405-880c-494b-935a-f955b933cd35","f730399d-668a-4dfd-ad50-5923d58f0614","7837e6bb-39cf-487b-9101-db8331106606","77c5ccd1-e71a-458b-9a38-d9b705bdf403","0dcdcc1e-ae78-4b78-9a70-817683b3bdf5","09b3f5d0-35a7-47d6-9baa-e71eda95a123","13c246f2-e8d9-4aed-9a82-77f60497ef48","6b38394f-795f-44eb-8192-8a15b289d594","d7b13111-b8c3-43dc-a64c-c2aeefc03450","65ef51ee-2fa1-4e36-8a88-084bb31c6dac"],"propsByKey":{"09d50e67-6804-41e9-8256-db1e8bbf527b":{"name":"bg","sourceUrl":null,"frameSize":{"x":504,"y":360},"frameCount":1,"looping":true,"frameDelay":12,"version":"U5aS_N.asX_7HiMFGve2qPAA73V1W4nG","loadedFromSource":true,"saved":true,"sourceSize":{"x":504,"y":360},"rootRelativePath":"assets/09d50e67-6804-41e9-8256-db1e8bbf527b.png"},"1dd7e405-880c-494b-935a-f955b933cd35":{"name":"wall","sourceUrl":null,"frameSize":{"x":273,"y":29},"frameCount":1,"looping":true,"frameDelay":12,"version":"GKQ7LYfxUr64c7XOF1JhKmHYZ12.INqn","loadedFromSource":true,"saved":true,"sourceSize":{"x":273,"y":29},"rootRelativePath":"assets/1dd7e405-880c-494b-935a-f955b933cd35.png"},"f730399d-668a-4dfd-ad50-5923d58f0614":{"name":"boombas","sourceUrl":null,"frameSize":{"x":319,"y":318},"frameCount":2,"looping":true,"frameDelay":12,"version":"BLxlua51KE2Pj5SjvpPRvqNOR7pEo3Vb","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":319,"y":636},"rootRelativePath":"assets/f730399d-668a-4dfd-ad50-5923d58f0614.png"},"7837e6bb-39cf-487b-9101-db8331106606":{"name":"koopa","sourceUrl":null,"frameSize":{"x":312,"y":508},"frameCount":2,"looping":true,"frameDelay":12,"version":"r7iV6WVgNeic3ClBatK1_Ys4QgskE3ne","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":624,"y":508},"rootRelativePath":"assets/7837e6bb-39cf-487b-9101-db8331106606.png"},"77c5ccd1-e71a-458b-9a38-d9b705bdf403":{"name":"bowser","sourceUrl":null,"frameSize":{"x":185,"y":180},"frameCount":2,"looping":true,"frameDelay":12,"version":"CN24nTJHrpc9RDehlh.PJoLt71qHb3fj","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":185,"y":360},"rootRelativePath":"assets/77c5ccd1-e71a-458b-9a38-d9b705bdf403.png"},"0dcdcc1e-ae78-4b78-9a70-817683b3bdf5":{"name":"marioright","sourceUrl":null,"frameSize":{"x":328,"y":435},"frameCount":1,"looping":true,"frameDelay":12,"version":"dvCR1QLHp9XwYo2ejB6s5U50O5s4S_Eg","loadedFromSource":true,"saved":true,"sourceSize":{"x":328,"y":435},"rootRelativePath":"assets/0dcdcc1e-ae78-4b78-9a70-817683b3bdf5.png"},"09b3f5d0-35a7-47d6-9baa-e71eda95a123":{"name":"marioleft","sourceUrl":null,"frameSize":{"x":328,"y":435},"frameCount":1,"looping":true,"frameDelay":12,"version":"KyqpfnzuLLf8t8G4zRP2kW7J1.yxeJRy","loadedFromSource":true,"saved":true,"sourceSize":{"x":328,"y":435},"rootRelativePath":"assets/09b3f5d0-35a7-47d6-9baa-e71eda95a123.png"},"13c246f2-e8d9-4aed-9a82-77f60497ef48":{"name":"castle","sourceUrl":"assets/v3/animations/INhOxwQcxPk92NaFHfvgCHcXqelOXVUlsPUW7inWJnw/13c246f2-e8d9-4aed-9a82-77f60497ef48.png","frameSize":{"x":1200,"y":1200},"frameCount":1,"looping":true,"frameDelay":4,"version":"bV10H.aWV5KeSxu2it0bTks90wAZv9i7","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":1200},"rootRelativePath":"assets/v3/animations/INhOxwQcxPk92NaFHfvgCHcXqelOXVUlsPUW7inWJnw/13c246f2-e8d9-4aed-9a82-77f60497ef48.png"},"6b38394f-795f-44eb-8192-8a15b289d594":{"name":"flag","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"9LM1Afy5Ups2cVa70cstliHbxBo830Zs","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/6b38394f-795f-44eb-8192-8a15b289d594.png"},"d7b13111-b8c3-43dc-a64c-c2aeefc03450":{"name":"princess","sourceUrl":null,"frameSize":{"x":183,"y":242},"frameCount":3,"looping":true,"frameDelay":12,"version":"QLIEPHpe6ocEhiwuRwsbiCIOie74dYLm","loadedFromSource":true,"saved":true,"sourceSize":{"x":366,"y":484},"rootRelativePath":"assets/d7b13111-b8c3-43dc-a64c-c2aeefc03450.png"},"65ef51ee-2fa1-4e36-8a88-084bb31c6dac":{"name":"coin","sourceUrl":null,"frameSize":{"x":179,"y":314},"frameCount":1,"looping":true,"frameDelay":12,"version":"6LAO.LzJHZKhlrl6bew0ctAJCn_jpYGc","loadedFromSource":true,"saved":true,"sourceSize":{"x":179,"y":314},"rootRelativePath":"assets/65ef51ee-2fa1-4e36-8a88-084bb31c6dac.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var coin = 0;
//making gamestate
var gameState ="start";

var coin1 = createSprite(90, 50);
coin1.setAnimation("coin");
coin1.scale = 0.1;
var coin2 = createSprite(160, 50);
coin2.setAnimation("coin");
coin2.scale = 0.1;
var coin3 = createSprite(230, 50);
coin3.setAnimation("coin");
coin3.scale = 0.1;
var coin4 = createSprite(340, 150);
coin4.setAnimation("coin");
coin4.scale = 0.1;
var coin5 = createSprite(280, 150);
coin5.setAnimation("coin");
coin5.scale = 0.1;
var coin6 = createSprite(150, 150);
coin6.setAnimation("coin");
coin6.scale = 0.1;
var coin7 = createSprite(30, 250);
coin7.setAnimation("coin");
coin7.scale = 0.1;
var coin8 = createSprite(90, 250);
coin8.setAnimation("coin");
coin8.scale = 0.1;
var coin9 = createSprite(150, 250);
coin9.setAnimation("coin");
coin9.scale = 0.1;
var coin10 = createSprite(130, 380);
coin10.setAnimation("coin");
coin10.scale = 0.1;
var coin11 = createSprite(350, 380);
coin11.setAnimation("coin");
coin11.scale = 0.1;
var coin12 = createSprite(275, 380);
coin12.setAnimation("coin");
coin12.scale = 0.1;



//making score
var score =5;





//creating mario
var mario = createSprite(40, 50,20,20);
mario.setAnimation("marioright");
mario.scale = 0.08;





//creating walls
var wall1 = createSprite(140, 80,300,25);
var wall2 = createSprite(260, 180,300,25);
var wall3 = createSprite(140, 280,300,25);
wall1.setAnimation("wall");
wall2.setAnimation("wall");
wall3.setAnimation("wall");



//making borders
var b1 = createSprite(200, 3,400,5);
var b2 = createSprite(3, 200,5,400);
var b3 = createSprite(200, 397,400,5);
var b4 = createSprite(397, 200,5,400);
b1.shapeColor = "brown";
b2.shapeColor = "brown";
b3.shapeColor = "brown";
b4.shapeColor = "brown";




//creating castle
var castle = createSprite(50, 355,20,20);
castle.setAnimation("castle");
castle.scale = 0.07;




//creating villains
var villain1 = createSprite(200, 128,20,20);
var villain2 = createSprite(200, 230,20,20);
var villain3 = createSprite(200, 330,20,20);
villain1.setAnimation("boombas");
villain2.setAnimation("koopa");
villain3.setAnimation("bowser");
villain1.scale = 0.07;
villain2.scale = 0.05;
villain3.scale = 0.2;













playSound("assets/Super-Mario-Bros.-Theme-Song.mp3", true);


function draw() {
//making background
background("lightblue");


if ( gameState=="start") {
  
  //display welcome text
  textFont("fiverr");
  fill("brown");
  textSize(25);
  text("Welcome! Press Space to start.",25,215);
if (keyDown("space")) {
  villain1.velocityY=4;
  villain2.velocityY=3.5;
  villain3.velocityY=6;
  playSound("assets/category_alerts/comedy_game_over_1.mp3", false);
  gameState ="play";
  
}
}

if ( gameState=="play") {
  //making mario move
  if (keyDown("UP_ARROW")) {
    mario.y=mario.y-8
    
  }
  if (keyDown("DOWN_ARROW")) {
    mario.y=mario.y+8
  }
  if (keyDown("LEFT_ARROW")) {
    mario.x=mario.x-8
    mario.setAnimation("marioleft");
    mario.scale = 0.08;
  }
  if (keyDown("RIGHT_ARROW")) {
    mario.x=mario.x+8
    mario.setAnimation("marioright");
    mario.scale = 0.08;
  }
  //changing gamestate
  if (score == 0) {
    gameState = "end";
    playSound("assets/category_retro/retro_game_medium_fall_3.mp3", false);
    stopSound("assets/Super-Mario-Bros.-Theme-Song.mp3");
  }
  if (mario.isTouching(castle)) {
    gameState = "win";
    var flag = createSprite(60, 330);
    flag.setAnimation("flag");
    var princess = createSprite(100, 370);
    princess.setAnimation("princess");
    princess.scale = 0.3;
    playSound("assets/category_points/vibrant_game_cartoon_musical_bling_1.mp3", false);
    stopSound("assets/Super-Mario-Bros.-Theme-Song.mp3");
  }
}


if (gameState == "end") {
  textSize(30);
  fill("brown");
  text("You Lost!", 25, 220);
  villain1.velocityY=0;
  villain2.velocityY=0;
  villain3.velocityY=0;
  mario.destroy();
}

if (gameState == "win") {
  textSize(30);
  fill("yellow");
  text("You Win!", 25, 220);
  background("cyan");
  villain1.velocityY=0;
  villain2.velocityY=0;
  villain3.velocityY=0;
  villain1.destroy();
  villain2.destroy();
  villain3.destroy();
  mario.y = 360;
  mario.x = 160;
}


//making mario and villains bounce off walls and edges
mario.bounceOff(wall1);
mario.bounceOff(wall2);
mario.bounceOff(wall3);
createEdgeSprites();
mario.bounceOff(edges);
villain1.bounceOff(wall1);
villain1.bounceOff(wall2);
villain2.bounceOff(wall2);
villain2.bounceOff(wall3);
villain3.bounceOff(wall3);
villain3.bounceOff(edges);

mario.bounceOff(b1);
mario.bounceOff(b2);
mario.bounceOff(b3);
mario.bounceOff(b4);







//displaying score
textSize(20);
fill("brown");
text("Lives left:" + score, 280, 25);




textSize(20);
text("Coins:" + coin, 30, 25);





//making mario reset
if (mario.isTouching(villain1)){

score = score-1  ;
mario.x=40;
mario.y=50;
coin = 0;
playSound("assets/category_retro/retro_game_classic_player_death_9.mp3", false);
}
if (mario.isTouching(villain2)){

score = score-1  ;
mario.x=40
mario.y=50;
coin = 0;
playSound("assets/category_retro/retro_game_classic_player_death_9.mp3", false);
}

if (mario.isTouching(villain3)){

score = score-1  ;
mario.x=40
mario.y=50;
coin = 0;
playSound("assets/category_retro/retro_game_classic_player_death_9.mp3", false);
}


if (mario.isTouching(coin1)) {
  playSound("assets/category_points/vibrant_affirm_or_open.mp3", false);
  coin = coin + 1;
  coin1.destroy();
}
if (mario.isTouching(coin2)) {
  playSound("assets/category_points/vibrant_affirm_or_open.mp3", false);
  coin = coin + 1;
  coin2.destroy();
}
if (mario.isTouching(coin3)) {
  playSound("assets/category_points/vibrant_affirm_or_open.mp3", false);
  coin = coin + 1;
  coin3.destroy();
}
if (mario.isTouching(coin4)) {
  playSound("assets/category_points/vibrant_affirm_or_open.mp3", false);
  coin = coin + 1;
  coin4.destroy();
}
if (mario.isTouching(coin5)) {
  playSound("assets/category_points/vibrant_affirm_or_open.mp3", false);
  coin = coin + 1;
  coin5.destroy();
}
if (mario.isTouching(coin6)) {
  playSound("assets/category_points/vibrant_affirm_or_open.mp3", false);
  coin = coin + 1;
  coin6.destroy();
}
if (mario.isTouching(coin7)) {
  playSound("assets/category_points/vibrant_affirm_or_open.mp3", false);
  coin = coin + 1;
  coin7.destroy();
}
if (mario.isTouching(coin8)) {
  playSound("assets/category_points/vibrant_affirm_or_open.mp3", false);
  coin = coin + 1;
  coin8.destroy();
}
if (mario.isTouching(coin9)) {
  playSound("assets/category_points/vibrant_affirm_or_open.mp3", false);
  coin = coin + 1;
  coin9.destroy();
}
if (mario.isTouching(coin10)) {
  playSound("assets/category_points/vibrant_affirm_or_open.mp3", false);
  coin = coin + 1;
  coin10.destroy();
}
if (mario.isTouching(coin11)) {
  playSound("assets/category_points/vibrant_affirm_or_open.mp3", false);
  coin = coin + 1;
  coin11.destroy();
}
if (mario.isTouching(coin12)) {
  playSound("assets/category_points/vibrant_affirm_or_open.mp3", false);
  coin = coin + 1;
  coin12.destroy();
}

drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
