class BossChar extends GameObject {
    constructor(container, initData) {
        super("BOSS", container, initData.x, initData.y, 0, 0, initData);
        this.life = this.initLife = this.initData.life;
        this.moveFlagX = true;  // x축 움직임 제어하는 플래그값 
        this.moveFlagY = true;  // y축 움직임 제어하는 플래그값
        this.maxSpeed = this.initData.maxSpeed;
        this.phase = 1; // 현재 페이즈 값 계산
        this.name = initData.name;
    }

    tick() {
        this.tickCount++;
        (this.tickCount) %= 10000;

        var tmpX = getRandom(this.maxSpeed) / 20;
        var tmpY = getRandom(this.maxSpeed) / 20;
        this.velX = (this.moveFlagX) ? tmpX : -tmpX;
        this.velY = (this.moveFlagY) ? tmpY : -tmpY;


        this.x += this.velX;
        this.y += this.velY;

        if (this.x < 500 || this.x + this.width > parseInt(this.container.style.width)) {
            this.moveFlagX = !this.moveFlagX;
            this.x -= this.velX;
        }

        if (this.y < 0 || this.y + this.height > parseInt(this.container.style.height)) {
            this.moveFlagY = !this.moveFlagY;
            this.y -= this.velY;
        }
    }

    attack() {
        switch (this.phase) {
            case 1: this.phase1(); break;
            case 2: this.phase2(); break;
            case 3: this.phase3(); break;
        }
    }
}