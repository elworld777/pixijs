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

let cat;

//This `setup` function will run when the image has loaded
function setup() {

  //Create the cat sprite
  cat = new PIXI.Sprite(PIXI.loader.resources["img/cat.png"].texture);

  cat.x = 200;
  cat.y = 200;

  //Add the cat to the stage
  app.stage.addChild(cat);

  //Start the game loop by adding the `gameLoop` function to
  //Pixi's `ticker` and providing it with a `delta` argument.
  app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta){

  //Move the cat 1 pixel 
  cat.x += 1;
  //cat.x += 1 + delta;
}