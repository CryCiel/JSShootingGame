class HitBox{
    constructor(container, x, y, width, height){
        this.container = container;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.viewFlag = DEBUG_MODE;

        this.div = document.createElement("div");
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.style.position = "absolute";
        this.div.style.left = x + "px";
        this.div.style.top = y + "px";
        this.div.style.float="left"
        if(this.viewFlag){
            this.div.style.background = "red";
            this.div.style.opacity = 0.5;
        }

        this.container.appendChild(this.div);
    }
}