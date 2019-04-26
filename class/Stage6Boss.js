class Stage6Boss extends BossChar {
    constructor(container, initData) {
        super(container, initData);
        this.backChangeFlag = true;
        this.img = document.createElement("img");
    }

    phase1() {
        if ((this.tickCount % this.initData.bullet.phase1.interval) == 0) {
            for (var i = 0; i < 6; i++) {
                var bullet = new S5Phase1(this.container, this.x - 15, this.y + 15, 0, (3 - i) * 0.5, this.initData.bullet.phase1);
                objectManager.addObject(bullet);
            }
        }
    }

    phase2() {
        this.phase1();
        if ((this.tickCount % this.initData.bullet.phase2.interval) == 0) {
            var ranY = getRandomByRange(20, 100);   // 초기 height값 랜덤으로 줌
            for (var i = 0; i < 5; i++) {
                var ranH = getRandomByRange(-20, 20);   // 객체별로 랜덤으로 height값 수정;
                var bullet = new S6Phase2(this.container, parseInt(this.container.style.width) - 20, ranY + 120 * i + ranH, 0, 0, this.initData.bullet.phase2);
                objectManager.addObject(bullet);
            }
        }
    }

    phase3() {
        this.phase1();
        // 상단 바 배경 변경하는 플래그값
        if (this.backChangeFlag) {
            this.bossStatBarChange();
            this.backChangeFlag = false;
        }

        if ((this.tickCount % this.initData.bullet.phase3.interval) == 0) {
            var ranX = getRandom(parseInt(this.container.style.width));
            var bullet = new S6Phase3(this.container, ranX, - 80, 0, 0, this.initData.bullet.phase3);
            objectManager.addObject(bullet);
        }

    }

    bossStatBarChange() {
        this.img.style.position = "absolute";
        this.img.style.left = 0 + "px";
        this.img.style.top = 0 + "px";
        this.img.src = "./img/bullet/pikachu_phase3_cloud.png"
        divBossInfo.appendChild(this.img);
    }


}

class S6Phase1 extends Bullet {
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
        if (this.x < -this.width || this.x > parseInt(this.container.style.width) || this.y < -this.height || this.y > parseInt(this.container.style.height)) {
            objectManager.removeObject(this);
        }
    }
}

class S6Phase2 extends Bullet {
    constructor(container, x, y, velX, velY, initData) {
        super("BOSS_BULLET", container, x, y, velX, velY, initData);
    }

    tick() {
        this.tickCount++;

        if (this.tickCount > this.delay) {
            this.velX = -this.speed;
        }

        this.x += this.velX;


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


class S6Phase3 extends Bullet {
    constructor(container, x, y, velX, velY, initData) {
        super("BOSS_BULLET", container, x, y, velX, velY, initData);
        this.div.style.opacity = 0.8;
        this.ranX = getRandomByRange(-this.accel * 100, this.accel*100)/200;

    }

    tick() {
        this.tickCount++;


        this.velY += this.accel;
        if (this.tickCount > this.delay) {
            this.velX += this.ranX;
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
        if (this.x < -this.width || this.y > (parseInt(this.container.style.height))) {
            objectManager.removeObject(this);
        }
    }
}