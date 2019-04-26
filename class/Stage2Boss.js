class Stage2Boss extends BossChar {
    constructor(container, initData) {
        super(container, initData);
    }

    phase1() {
        if ((this.tickCount % this.initData.bullet.phase1.interval) == 0) {
            for (var i = 0; i < 2; i++) {
                var bullet = new S2Phase1(this.container, this.x + 3, this.y + 90, 0, (0.5 - i) * 0.5, this.initData.bullet.phase1);
                objectManager.addObject(bullet);
            }
        }
    }

    phase2() {
        this.phase1();
        if ((this.tickCount % this.initData.bullet.phase2.interval) == 0) {
            var tmpR = getRandomByRange(-30, 30) / 30;
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 3; j++) {
                    var bullet = new S2Phase2(this.container, (this.x - 10) + j * 70, (this.y + 41) + i * 25, 0, tmpR, this.initData.bullet.phase2);
                    objectManager.addObject(bullet);
                }
            }
        }
    }

    phase3() {
        this.phase1();
        this.maxSpeed = 0;
        if ((this.tickCount % this.initData.bullet.phase3.interval) == 0) {
            var phase3SpeedX = -getRandomByRange(this.initData.bullet.phase3.speed*15, this.initData.bullet.phase3.speed*30)/20;
            var phase3SpeedY = getRandomByRange(-this.initData.bullet.phase3.speed*10, this.initData.bullet.phase3.speed*10)/30;
            for (var i = 0; i < 12; i++) {
                var bullet = new S2Phase3(this.container, this.x - 78, this.y - 141, 0, 0, this.initData.bullet.phase3, phase3SpeedX, phase3SpeedY, i);
                objectManager.addObject(bullet);
            }
        }

    }
}

class S2Phase1 extends Bullet {
    constructor(container, x, y, velX, velY, initData) {
        super("BOSS_BULLET", container, x, y, velX, velY, initData);
        this.velX = -this.initData.speed;
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
        if (this.x < -this.width) {
            objectManager.removeObject(this);
        }
    }
}

class S2Phase2 extends Bullet {
    constructor(container, x, y, velX, velY, initData) {
        super("BOSS_BULLET", container, x, y, velX, velY, initData);
        this.velX = -this.initData.speed;
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
        if (this.x < -this.width) {
            objectManager.removeObject(this);
        }
    }
}


class S2Phase3 extends Bullet {
    constructor(container, x, y, velX, velY, initData, newSpeedX, newSpeedY, index) {
        super("BOSS_BULLET", container, x, y, velX, velY, initData);
        this.div.style.opacity = 0.5;
        this.newSpeedX = newSpeedX;
        this.newSpeedY = newSpeedY;
        this.index = index;
    }

    tick() {
        this.tickCount++;
        // 0.1초 지나면 순서대로 발사
        if(this.tickCount > this.delay+this.index*20){
            this.newSpeedX -= this.accel;
            this.newSpeedY += (this.newSpeedY>0)?this.accel:-this.accel;
            this.velX = this.newSpeedX;
            this.velY = this.newSpeedY;
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
        if (this.x < -this.width) {
            objectManager.removeObject(this);
        }
    }
}