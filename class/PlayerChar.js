class PlayerChar extends GameObject {
    constructor(container, initData) {
        super("PLAYER", container, initData.x, initData.y, 0, 0, initData);
        this.skillCoolDown = this.initData.bullet.skill.interval;
    }

    tick() {
        if (this.skillCoolDown < this.initData.bullet.skill.interval) { // 스킬 발동 쿨다운 
            this.skillCoolDown++;
        }
        this.tickCount++;
        (this.tickCount) %= 10000;

        this.x += this.velX;
        this.y += this.velY;
        // 화면 밖으로 나가지 않게 설정
        if (this.x < 0) {
            this.x = 0;
        }
        if (this.y < 0) {
            this.y = 0;
        }
        if (this.x + this.width > parseInt(this.container.style.width)) {
            this.x = parseInt(this.container.style.width) - this.width
        }
        if (this.y + this.height > parseInt(this.container.style.height)) {
            this.y = parseInt(this.container.style.height) - this.height
        }
    }

    normalBullet() {
        if (this.tickCount % this.initData.bullet.normal.interval == 0) {
            var bullet = new NormalBullet(this.container, this.x + 70, this.y + 40, this.initData.bullet.normal.speed, 0, this.initData.bullet.normal);
            objectManager.addObject(bullet);
        }
    }

    skill() {
        if (this.skillCoolDown == this.initData.bullet.skill.interval) {   // 연속으로 발동 안하게 설정
            this.skillCoolDown = 0;
            for (var i = 0; i < parseInt(parseInt(this.container.style.height) / 150); i++) {
                var bullet = new SkillBullet(this.container, this.x, 150 * i - 20, this.initData.bullet.skill.speed, 0, this.initData.bullet.skill);
                objectManager.addObject(bullet);
            }
        }

    }

}


class NormalBullet extends Bullet {
    constructor(container, x, y, velX, velY, initData) {
        super("PLAYER_NORMAL", container, x, y, velX, velY, initData);
    }

    tick() {
        this.x += this.velX;
        this.y += this.velY;

        // 일반탄은 적 보스를 만나면 제거
        for (var i = 0; i < objectManager.objectArray.length; i++) {
            var obj = objectManager.objectArray[i];
            if (obj.type == "BOSS") {
                if (collisionCheck(this, obj)) {
                    objectManager.removeObject(this);
                    obj.life -= this.damage;
                    gameInfo.score+=10;
                }
            }
        }

        // 화면밖으로 나가면 제거
        if (this.x > parseInt(this.container.style.width) || this.y < 0 || this.y > parseInt(this.container.style.height)) {
            objectManager.removeObject(this);
        }
    }
}

class SkillBullet extends Bullet {
    constructor(container, x, y, velX, velY, initData) {
        super("PLAYER_SKILL", container, x, y, velX, velY, initData);
        this.div.style.opacity = 0.8;
    }

    tick() {
        this.x += this.velX;
        this.y += this.velY;

        // 스킬은 적 탄환만 제거
        for (var i = 0; i < objectManager.objectArray.length; i++) {
            var obj = objectManager.objectArray[i];
            if (obj.type == "BOSS_BULLET") {
                if (collisionCheck(this, obj)) {
                    objectManager.removeObject(obj);
                    gameInfo.score+=10;
                }
            }
        }

        // 화면밖으로 나가면 제거
        if (this.x > parseInt(this.container.style.width)) {
            objectManager.removeObject(this);
        }
    }
}