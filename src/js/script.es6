import {CanvasView} from "./canvasView.es6";
import {Player} from "./player.es6";
import {KeyView} from "./keyView.es6";

class Controller{
    constructor(){
        //Volgorde maakt uit!
        this.Player = new Player();
        this.CanvasView = new CanvasView();
        this.KeyView = new KeyView();
        //..
        this.loop();
    };

    loop(){
        //Clearing canvas before filling in
        this.CanvasView.clearDraw();

        this.Player.move(this.KeyView.keys);

        //Draw functions
        this.CanvasView.drawRect(this.Player.position, this.Player.dimensions, this.Player.fillStyle);

        window.requestAnimationFrame(()=>{
            this.loop();
        });
    };
};

document.addEventListener("DOMContentLoaded", function(event) {
    let controller = new Controller();
});