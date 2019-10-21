//Create a Pixi Application
let app = new PIXI.Application({
    width: 1366,
    height: 768,
    antialias: true
}
);

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

//load an image and run the `setup` function when it's done
PIXI.loader
  .add("img/cat.png")
  .load(setup);

let cat, state;

//This `setup` function will run when the image has loaded
function setup() {

  //Create the cat sprite
  cat = new PIXI.Sprite(PIXI.loader.resources["img/cat.png"].texture);

  cat.x = 0;
  cat.y = 300;
  cat.vx = 0;
  cat.vy = 0;

  cat.interactive = true;

  // Combines both mouse click + touch tap
  cat.on('pointertap', onClick);

  //Add the cat to the stage
  app.stage.addChild(cat);

  state = play;

  //Start the game loop by adding the `gameLoop` function to
  //Pixi's `ticker` and providing it with a `delta` argument.
  app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta){

  //Move the cat 1 pixel 
  //cat.x += 1;
  //cat.x += 1 + delta;
  state(delta);
}

function play(delta){
  cat.vx = 5;
  cat.x += cat.vx;
  
  let catHitsWall = contain(cat, {x: -500, y: -500, width: 1866, height: 1268});

  if (catHitsWall == "right") {
    cat.x = 0 - cat.width;
  }

  if (cat.y < 300){
    cat.y += 1;
  }
}

function onClick(){
  this.y -= 20;
}

function contain(sprite, container) {

  let collision = undefined;

  //Left
  if (sprite.x < container.x) {
    sprite.x = container.x;
    collision = "left";
  }

  //Top
  if (sprite.y < container.y) {
    sprite.y = container.y;
    collision = "top";
  }

  //Right
  if (sprite.x + sprite.width > container.width) {
    sprite.x = container.width - sprite.width;
    collision = "right";
  }

  //Bottom
  if (sprite.y + sprite.height > container.height) {
    sprite.y = container.height - sprite.height;
    collision = "bottom";
  }

  //Return the `collision` value
  return collision;
}