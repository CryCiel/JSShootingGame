class Stage4Boss extends BossChar {
    constructor(container, initData) {
        super(container, initData);
    }

    phase1() {
        if ((this.tickCount % this.initData.bullet.phase1.interval) == 0) {
            for (var i = 0; i < 4; i++) {
                var bullet = new S4Phase1(this.container, this.x - 10, this.y + 62, 0, (1.5 - i) * 0.5, this.initData.bullet.phase1);
                objectManager.addObject(bullet);
            }
        }
    }

    phase2() {
        this.phase1();
        if ((this.tickCount % this.initData.bullet.phase2.interval) == 0) {
            var centerX = this.x - 10;  // 중심 x좌표
            var centerY = this.y + 62;  // 중심 y좌표
            var groupIndex = 1;

            for (var i = 1; i <= 3; i++) {
                var bullet = new S4Phase2(this.container, centerX, centerY - i * 20, 0, 0, this.initData.bullet.phase2, groupIndex);
                objectManager.addObject(bullet);
                groupIndex++;
            }

            for (var i = -3; i <= 3; i++) {
                if (i != 0) {
                    var bullet = new S4Phase2(this.container, centerX - i * 20, centerY, 0, 0, this.initData.bullet.phase2, groupIndex);
                    objectManager.addObject(bullet);
                }
                groupIndex++;
            }

            for (var i = 1; i <= 4; i++) {
                bullet = new S4Phase2(this.container, centerX - i * 10, centerY + i * 20, 0, 0, this.initData.bullet.phase2, groupIndex);
                objectManager.addObject(bullet);
                groupIndex++;
            }

            for (var i = 1; i <= 4; i++) {
                var bullet = new S4Phase2(this.container, centerX + i * 10, centerY + i * 20, 0, 0, this.initData.bullet.phase2, groupIndex);
                objectManager.addObject(bullet);
                groupIndex++;
            }


        }
    }

    phase3() {
        this.phase1();
        if ((this.tickCount % this.initData.bullet.phase3.interval) == 0) {
            var centerX = (userChar.x < 150) ? 150 : userChar.x;

            var bullet = new S4Phase3(this.container, centerX - 150, parseInt(this.container.style.height) - this.initData.bullet.phase3.height, 0, 0, this.initData.bullet.phase3);
            objectManager.addObject(bullet);
            bullet = new S4Phase3(this.container, centerX + 150, parseInt(this.container.style.height) - this.initData.bullet.phase3.height, 0, 0, this.initData.bullet.phase3);
            objectManager.addObject(bullet);
        }

    }
}



class S4Phase1 extends Bullet {
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
        if (this.x < -this.width || this.x > parseInt(this.container.style.width) || this.y > parseInt(this.container.style.height) || this.y < - this.height) {
            objectManager.removeObject(this);
        }
    }
}

class S4Phase2 extends Bullet {
    constructor(container, x, y, velX, velY, initData, groupIndex) {
        super("BOSS_BULLET", container, x, y, velX, velY, initData);
        this.velX = -initData.speed;
        this.groupIndex = groupIndex;
        this.speedChangeFlag = true;
    }

    tick() {
        this.tickCount++;

        if (this.tickCount > this.delay) {
            if (this.speedChangeFlag) {
                this.velX = 0;
                this.velY = 0;
                this.speedChangeFlag = false;
            } else if (this.groupIndex <= 3) {
                this.velY += -this.accel * this.groupIndex;
            } else if (this.groupIndex <= 10) {
                this.velX += this.accel * (this.groupIndex - 7);
            } else if (this.groupIndex <= 14) {
                this.velX += -this.accel * (this.groupIndex - 10) / 2;
                this.velY += this.accel * (this.groupIndex - 10);
            } else if (this.groupIndex <= 18) {
                this.velX += this.accel * (this.groupIndex - 14) / 2;
                this.velY += this.accel * (this.groupIndex - 14);
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



class S4Phase3 extends Bullet {
    constructor(container, x, y, velX, velY, initData) {
        super("BOSS_BULLET", container, x, y, velX, velY, initData);
        this.velY = -initData.speed;
        this.randTick = getRandom(400); // 탄환 생성될 시간 랜덤으로 지정
        this.shotFlag = true;
    }

    tick() {
        this.tickCount++;
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
        if (this.y < -this.height) {
            objectManager.removeObject(this);
        }
    }
}