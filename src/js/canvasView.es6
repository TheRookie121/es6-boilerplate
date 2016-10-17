class CanvasView{
    constructor(){
        this.canvas = document.getElementById("myCanvas");
        this.context = this.canvas.getContext("2d");
    };

    //Clear canvas function
    clearDraw(){
        this.context.clearRect(0, 0, 1280, 720);
    };

    //Draw rectangle (player) function
    drawRect(pos, dim, fillStyle){
        this.context.fillStyle = fillStyle;
        this.context.fillRect(pos.x, pos.y, dim.width, dim.height);
    };
};

export {CanvasView};