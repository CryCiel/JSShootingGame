// 게임에서 사용하는 탄을 정의하는 클래스
class Bullet extends GameObject {
    constructor(type, container, x, y, velX, velY, initData) {
        super(type, container, x, y, velX, velY, initData);
        this.accel = this.initData.accel;    // 탄 속도 증가 값
        this.delay = this.initData.delay;    // 탄 생성 후 대기값
        this.speed = this.initData.speed;
        this.damage = this.initData.damage;
    }
}