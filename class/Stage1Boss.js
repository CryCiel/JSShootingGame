class Stage1Boss extends BossChar {
    constructor(container, initData) {
        super(container, initData);
    }

    phase1() {
        if ((this.tickCount % this.initData.bullet.phase1.interval) == 0) {
            var bullet = new S1Phase1(this.container, this.x - 15, this.y + 15, 0, 0, this.initData.bullet.phase1);
            objectManager.addObject(bullet);
        }
    }

    phase2() {
        this.phase1();
        if ((this.tickCount % this.initData.bullet.phase2.interval) == 0) {
            for (var i = 0; i < 5; i++) {
                var bullet = new S1Phase2(this.container, this.x - 15, this.y + 15, 0, 0, this.initData.bullet.phase2);
                objectManager.addObject(bullet);
            }
        }
    }

    phase3() {
        this.phase1();
        if ((this.tickCount % this.initData.bullet.phase3.interval) == 0) {
            var bullet = new S1Phase3(this.container, this.x, this.y - 50, 0, 0, this.initData.bullet.phase3);
            objectManager.addObject(bullet);            
        }

    }
}

class S1Phase1 extends Bullet {
    constructor(container, x, y, velX, velY, initData) {
        super("BOSS_BULLET", container, x, y, velX, velY, initData);
        this.velX = -this.initData.speed;
    }

    tick() {
        this.tickCount++;
        (this.tickCount) %= 10000;

        this.x += this.velX;
        this.y += this.velY;


        // 플레이어 캐릭터 만나면 제거
        for (var i = 0; i < objectManager.objectArray.length; i++) {
            var obj = objectManager.objectArray[i];
            if (obj.type == "PLAYER") {
                if (collisionCheck(this, obj)) {
                    objectManager.removeObject(this);
                    gameInfo.life -= this.damage;
                }
            }
        }

        // 화면밖으로 나가면 제거
        if (this.x < -this.width) {
            objectManager.removeObject(this);
        }
    }
}

class S1Phase2 extends Bullet {
    constructor(container, x, y, velX, velY, initData) {
        super("BOSS_BULLET", container, x, y, velX, velY, initData);
        this.speedChangeFlag = true;  // 속도 변경 가능한지 알려주는 플래그값
        this.velX = -initData.speed;
    }

    tick() {
        this.tickCount++;
        (this.tickCount) %= 10000;

        if (this.speedChangeFlag && (this.tickCount % 50) == 0) {
            this.velX += -(getRandom(this.initData.speed * 10)) / 10;
            this.velY += (getRandomByRange(-this.initData.speed * 10, this.initData.speed * 10)) / 10;
            this.speedChangeFlag = false;

        } else {
            this.x += this.velX;
            this.y += this.velY;
        }


        // 플레이어 캐릭터 만나면 제거
        for (var i = 0; i < objectManager.objectArray.length; i++) {
            var obj = objectManager.objectArray[i];
            if (obj.type == "PLAYER") {
                if (collisionCheck(this, obj)) {
                    objectManager.removeObject(this);
                    gameInfo.life -= this.damage;
                }
            }
        }

        // 화면밖으로 나가면 제거
        if (this.x < -this.width || this.y < -this.height || this.y > parseInt(this.container.style.height)) {
            objectManager.removeObject(this);
        }
    }
}


class S1Phase3 extends Bullet {
    constructor(container, x, y, velX, velY, initData) {
        super("BOSS_BULLET", container, x, y, velX, velY, initData);
        this.speedChangeFlag = true;  // 속도 변경 가능한지 알려주는 플래그값
        this.velX = -getRandomByRange(initData.speed, initData.speed*3);
        this.div.style.opacity = 0.5;
        this.velY = -getRandom(initData.speed*3)/3;
        this.g = getRandom(50) * 0.0001;

    }

    tick() {
        this.velY += this.g;
        this.x += this.velX;
        this.y += this.velY;


        // 플레이어 캐릭터 만나면 제거
        for (var i = 0; i < objectManager.objectArray.length; i++) {
            var obj = objectManager.objectArray[i];
            if (obj.type == "PLAYER") {
                if (collisionCheck(this, obj)) {
                    objectManager.removeObject(this);
                    gameInfo.life -= this.damage;
                }
            }
        }

        // 화면밖으로 나가면 제거
        if (this.x < -this.width ||  this.y > (parseInt(this.container.style.height))) {
            objectManager.removeObject(this);
        }
    }
}