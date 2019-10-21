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
  .add("img/maps.png")
  .load(setup);

let maps;

function setup() {
    //Create the cat sprite
    maps = new PIXI.Sprite(PIXI.loader.resources["img/maps.png"].texture);
    app.stage.addChild(maps);
    app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta){
    
}
