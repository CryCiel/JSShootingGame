class Stage3Boss extends BossChar {
    constructor(container, initData) {
        super(container, initData);
        this.phase3Count = 0;
    }

    phase1() {
        if ((this.tickCount % this.initData.bullet.phase1.interval) == 0) {
            for (var i = 0; i < 3; i++) {
                var bullet = new S3Phase1(this.container, this.x + 68, this.y + 38, 0, (1 - i) * 0.5, this.initData.bullet.phase1);
                objectManager.addObject(bullet);
            }
        }
    }

    phase2() {
        this.phase1();
        if ((this.tickCount % this.initData.bullet.phase2.interval) == 0) {
            var ranX = getRandom(parseInt(this.container.style.width) - this.initData.bullet.phase2.width);
            var bullet = new S3Phase2(this.container, ranX, -50, 0, 0, this.initData.bullet.phase2, i);
            objectManager.addObject(bullet);
        }
    }

    phase3() {
        this.phase1();
        if ((this.tickCount % this.initData.bullet.phase3.interval) == 0) {
            // 바닥
            if (this.phase3Count == 0) {
                for (var j = 0; j < 8; j++) {
                    var ranNum = getRandomByRange(-30, 30);
                    for (var i = 0; i < 10; i++) {
                        var bullet = new S3Phase3(this.container, j * this.initData.bullet.phase3.width * 2 + ranNum, parseInt(this.container.style.height) - 10, 0, 0, this.initData.bullet.phase3, this.phase3Count, j, i);
                        objectManager.addObject(bullet);
                    }
                }
            }
            // 왼쪽 벽
            if (this.phase3Count == 1) {
                for (var j = 0; j < 5; j++) {
                    var ranNum = getRandomByRange(-30, 30);
                    for (var i = 0; i < 10; i++) {
                        var bullet = new S3Phase3(this.container, -50, this.initData.bullet.phase3.width * j * 2 + ranNum, 0, 0, this.initData.bullet.phase3, this.phase3Count, j, i);
                        objectManager.addObject(bullet);
                    }
                }
            }
            // 천장
            if (this.phase3Count == 2) {
                for (var j = 0; j < 8; j++) {
                    var ranNum = getRandomByRange(-30, 30);
                    for (var i = 0; i < 10; i++) {
                        var bullet = new S3Phase3(this.container, j * this.initData.bullet.phase3.width * 2 + ranNum, -50, 0, 0, this.initData.bullet.phase3, this.phase3Count, j, i);
                        objectManager.addObject(bullet);
                    }
                }
            }
            // 오른쪽 벽
            if (this.phase3Count == 3) {
                for (var j = 0; j < 5; j++) {
                    var ranNum = getRandomByRange(-30, 30);
                    for (var i = 0; i < 10; i++) {
                        var bullet = new S3Phase3(this.container, 890, this.initData.bullet.phase3.width * j * 2 + ranNum, 0, 0, this.initData.bullet.phase3, this.phase3Count, j, i);
                        objectManager.addObject(bullet);
                    }
                }
            }
            this.phase3Count++;
            if (this.phase3Count == 4) {
                this.phase3Count = 0;
            }

        }

    }
}

class S3Phase1 extends Bullet {
    constructor(container, x, y, velX, velY, initData) {
        super("BOSS_BULLET", container, x, y, velX, velY, initData);
        this.velX = -this.initData.speed;
        this.div.style.opacity = 0.8;
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

class S3Phase2 extends Bullet {
    constructor(container, x, y, velX, velY, initData) {
        super("BOSS_BULLET", container, x, y, velX, velY, initData);
    }

    tick() {
        this.tickCount++;

        if (this.tickCount > this.delay) {
            this.velY += this.accel;
        }

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


class S3Phase3 extends Bullet {
    constructor(container, x, y, velX, velY, initData, groupIndex, bulletIndex, bulletCnt) {
        super("BOSS_BULLET", container, x, y, velX, velY, initData);
        this.groupIndex = groupIndex;
        this.bulletIndex = bulletIndex;
        this.bulletCnt = bulletCnt;

    }

    tick() {
        this.tickCount++;
        if (this.tickCount > this.delay + 40 * this.bulletIndex + 10 * this.bulletCnt) {
            switch (this.groupIndex) {
                case 0: this.velY -= this.accel; break;
                case 1: this.velX += this.accel; break;
                case 2: this.velY += this.accel; break;
                case 3: this.velX -= this.accel; break;
            }
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
        if (this.x < -this.width || this.x > parseInt(this.container.style.width) + this.width || this.y < -this.height || this.y > parseInt(this.container.style.height)) {
            objectManager.removeObject(this);
        }
    }
}