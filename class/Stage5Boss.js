class Stage5Boss extends BossChar {
    constructor(container, initData) {
        super(container, initData);
    }

    phase1() {
        if ((this.tickCount % this.initData.bullet.phase1.interval) == 0) {
            for (var i = 0; i < 5; i++) {
                var bullet = new S5Phase1(this.container, this.x - 15, this.y + 15, 0, (2 - i) * 0.5, this.initData.bullet.phase1);
                objectManager.addObject(bullet);
            }
        }
    }


    phase2() {
        this.phase1();
        userChar.x += playerData.playerChar.moveSpeed / 3;
        if ((this.tickCount % this.initData.bullet.phase2.interval) == 0) {
            var randX = getRandom(parseInt(this.container.style.width) - this.initData.bullet.phase2.width);
            var bullet = new S5Phase2(this.container, randX, -this.initData.bullet.phase2.height + 10, 0, 0, this.initData.bullet.phase2);
            objectManager.addObject(bullet);
        }
    }

    phase3() {
        this.phase1();
        bossChar.maxSpeed = 0;
        if ((this.tickCount % this.initData.bullet.phase3.interval) == 0) {
            for (var i = 0; i < 10; i++) {
                var randX = getRandomByRange(-30,30);
                var bullet = new S5Phase3(this.container, i*150 + randX, -this.initData.bullet.phase3.height+30, 0, 0, this.initData.bullet.phase3, i);
                objectManager.addObject(bullet);
            }
        }
    }
}

class S5Phase1 extends Bullet {
    constructor(container, x, y, velX, velY, initData) {
        super("BOSS_BULLET", container, x, y, velX, velY, initData);
        this.velX = -this.speed;
    }

    tick() {
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
        if (this.x < -this.width || this.x > parseInt(this.container.style.width) || this.y < -this.height || this.y > parseInt(this.container.style.height)) {
            objectManager.removeObject(this);
        }
    }
}

class S5Phase2 extends Bullet {
    constructor(container, x, y, velX, velY, initData) {
        super("BOSS_BULLET", container, x, y, velX, velY, initData);
        this.stopFlag = true;
        this.div.style.opacity = 0.7;
    }

    tick() {
        this.tickCount++;

        if (this.tickCount > this.delay) {
            if (this.stopFlag) {
                this.velY = this.speed;
            } else {
                this.velY += this.accel;
            }
        }
        this.velY = ((1 + this.velY) * (1 + this.velY)) - 1;
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
        if (this.y > parseInt(this.container.style.height)) {
            objectManager.removeObject(this);
        }
    }
}


class S5Phase3 extends Bullet {
    constructor(container, x, y, velX, velY, initData, groupIndex) {
        super("BOSS_BULLET", container, x, y, velX, velY, initData);
        this.groupIndex = groupIndex;
        this.randT = getRandomByRange(-50,50);
    }

    tick() {
        this.tickCount++;

        if(this.tickCount>(this.delay + this.groupIndex*100 + this.randT)){
            this.velX -= this.accel;
            this.velY += this.accel;
        }

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
        if (this.x < -this.width || this.y > (parseInt(this.container.style.height))) {
            objectManager.removeObject(this);
        }
    }
}