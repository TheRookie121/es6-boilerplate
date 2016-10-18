class Player{
    constructor(){
        this.position = {x: 10, y: 10};
        this.dimensions = {width: 10, height: 10};
        this.fillStyle = "rgb(0, 0, 0)";    //black
        this.speed = 5;
    };

    //Player move function
    move(keys){
        console.log("moveParams", keys);
        console.log("moveParamLeft", keys.left);
        if(keys.left){
            this.position.x += this.speed;
        }
        else if(keys.right){
            this.position.x -= this.speed;
        }
        else if(keys.up){
            this.position.y -= this.speed;
        }
        else if(keys.down){
            this.position.y += this.speed;
        }
        else if(keys.space){
            console.log("moveJump");
        };
    };
};

export {Player};