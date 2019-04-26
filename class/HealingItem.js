class HealingItem extends Item {
    constructor(container, x, y, initData) {
        super("HEALING_ITEM", container, x, y, initData);
        this.velX = -this.initData.speed;
    }
    
    tick(){
        this.x += this.velX;

        // 일반탄은 적 보스를 만나면 제거
        for (var i = 0; i < objectManager.objectArray.length; i++) {
            var obj = objectManager.objectArray[i];
            if (obj.type == "PLAYER") {
                if (collisionCheck(this, obj)) {
                    objectManager.removeObject(this);
                    gameInfo.life += this.initData.healingPoint;
                    if(gameInfo.life >playerData.initValue.life){
                        gameInfo.life = playerData.initValue.life;
                    }
                }
            }
        }

        // 화면밖으로 나가면 제거
        if (this.x < -this.width) {
            objectManager.removeObject(this);
        }
    } 
}