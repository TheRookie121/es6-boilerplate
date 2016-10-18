class KeyView{
    constructor(){
        console.log("Keyview");
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
        this.space = false;

        //Key down event
        document.addEventListener("keyDown", (keyDown)=>{
            if(keyDown.keyCode == 37){
                this.left = true;
                console.log("test");
            }
            else if(keyDown.keyCode == 39){
                this.right = true;
            }
            else if(keyDown.keyCode == 38){
                this.up = true;
            }
            else if(keyDown.keyCode == 40){
                this.down = true;
            }
            else if(keyDown.keyCode == 32){
                this.space = true;
            };
        });

        //Key up event
        document.addEventListener("keyUp", (keyUp)=>{
            if(keyUp.keyCode == 37){
                this.left = false;
            }
            else if(keyUp.keyCode == 39){
                this.right = false;
            }
            else if(keyUp.keyCode == 38){
                this.up = false;
            }
            else if(keyUp.keyCode == 40){
                this.down = false
            }
            else if(keyUp.keyCode == 32){
                this.space = false;
            };
        });
    };

    //Get keys function
    getKeys(){
        return{
            left: this.left,
            right: this.right,
            up: this.up,
            down: this.down,
            space: this.space
        };
    };
};

module.exports = KeyView;