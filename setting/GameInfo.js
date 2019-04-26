// 게임 플레이중 데이터를 저장하는 객체

class GameInfo {
    constructor(initValue) {
        this.stage = initValue.stage;
        this.score = initValue.score;
        this.life = initValue.life;
    }
}