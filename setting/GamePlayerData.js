// 게임 플레이 시 필요한 초기 데이터 값 정의
var playerData = {
    "initValue": {
        "life": 300,
        "stage": 1,
        "score": 0
    },
    "playerChar": {
        "x": 100,
        "y": 100,
        "width": 100,
        "height": 100,
        "moveSpeed": 3,
        "src": "./img/char/pidgeot.gif",
        "hitBox": [
            {
                "x": 38,
                "y": 39,
                "width": 15,
                "height": 31
            },
            {
                "x": 25,
                "y": 63,
                "width": 13,
                "height": 16
            }
        ],
        "bullet": {
            "normal": {
                "width": 40,
                "height": 60,
                "speed": 5,
                "accel": 0,
                "delay": 0,
                "src": "./img/bullet/player.png",
                "interval": 15,
                "damage": 1,
                "hitBox": [
                    {
                        "x": 0,
                        "y": 5,
                        "width": 40,
                        "height": 55
                    }
                ]
            },
            "skill": {
                "width": 80,
                "height": 200,
                "speed": 2,
                "accel": 0,
                "delay": 0,
                "src": "./img/bullet/player.png",
                "interval": 1000,
                "damage": 0,
                "hitBox": [
                    {
                        "x": 0,
                        "y": 5,
                        "width": 80,
                        "height": 195
                    }
                ]
            }
        }
    }
}