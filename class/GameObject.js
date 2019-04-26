// 게임 플레이시 생성되는 오브젝트 정의
// width, height, src, hitbox는 데이터 파일에서 가져옴
class GameObject {
    constructor(type, container, x, y, velX, velY, initData) {  
        this.initData = initData;
        this.type = type;
        this.container = container;
        this.x = x;
        this.y = y;
        this.width = this.initData.width;
        this.height = this.initData.height;
        this.velX = velX;
        this.velY = velY;
        this.src = this.initData.src; // 이미지 주소
        this.hitBox = [];   // 충돌범위 지정할 배열
        this.tickCount = 0; // bullet 패턴 및 공격 쿨다운 만들때 사용할 tickCount값. 

        this.div = document.createElement("div");
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.style.position = "absolute";
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
        this.div.style.backgroundImage = "url('" + this.src + "')"
        this.div.style.backgroundSize = "100% 100%";
        if (DEBUG_MODE) {
            this.div.style.border="1px solid pink";
        }

        this.container.appendChild(this.div);
        this.createHitBox()
    }

    createHitBox() {
        for (var i = 0; i < this.initData.hitBox.length; i++) {
            var box = this.initData.hitBox[i];
            var hitBox = new HitBox(this.div, box.x, box.y, box.width, box.height);
            this.hitBox.push(hitBox);
        }
    }

    tick() {
        this.tickCount++;
        (this.tickCount) %= 10000; // tick값이 10000넘지 않도록 설정 -> 혹시모를 오류 예방용
        
        this.x += this.velX;
        this.y += this.velY;        
    }

    render() {
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    }
}