var bossData = {
    "stage1Boss":
    {
        "x": 700,
        "y": 200,
        "width": 150,
        "height": 150,
        "src": "./img/char/lapras.gif",
        "stage": 1,
        "name": "라프라스",
        "life": 100,
        "maxSpeed": 20,
        "hitBox": [
            {
                "x": 38,
                "y": 20,
                "width": 20,
                "height": 115
            }
        ],
        "skillNames": [
            "",
            "물대포",
            "냉동빔",
            "파도타기"
        ],
        "bullet": {
            "phase1": {
                "name": "물대포",
                "width": 50,
                "height": 50,
                "speed": 2,
                "accel": 0,
                "delay": 0,
                "interval": 200,
                "damage" : 5,
                "src": "./img/bullet/lapras_phase1.png",
                "hitBox": [
                    {
                        "x": 11,
                        "y": 7,
                        "width": 25,
                        "height": 32
                    }
                ]
            },
            "phase2": {
                "name": "냉동빔",
                "width": 50,
                "height": 50,
                "speed": 2,
                "accel": 0,
                "delay": 0,
                "interval": 500,
                "damage" : 3,
                "src": "./img/bullet/lapras_phase2.png",
                "hitBox": [
                    {
                        "x": 11,
                        "y": 7,
                        "width": 25,
                        "height": 32
                    }
                ]
            },
            "phase3": {
                "name": "파도타기",
                "width": 200,
                "height": 200,
                "speed": 1,
                "accel": 0,
                "delay": 0,
                "interval": 250,
                "damage" : 10,
                "src": "./img/bullet/lapras_phase3.png",
                "hitBox": [
                    {
                        "x": 34,
                        "y": 11,
                        "width": 47,
                        "height": 37
                    },
                    {
                        "x": 41,
                        "y": 48,
                        "width": 60,
                        "height": 152
                    },
                    {
                        "x": 0,
                        "y": 138,
                        "width": 41,
                        "height": 62
                    },
                    {
                        "x": 101,
                        "y": 97,
                        "width": 51,
                        "height": 103
                    },
                    {
                        "x": 152,
                        "y": 115,
                        "width": 27,
                        "height": 85
                    }
                ]
            }
        }
    },

    "stage2Boss":
    {
        "x": 700,
        "y": 200,
        "width": 150,
        "height": 150,
        "src": "./img/char/venusaur.gif",
        "stage": 2,
        "name": "이상해꽃",
        "life": 150,
        "maxSpeed": 25,
        "hitBox": [
            {
                "x": 28,
                "y": 54,
                "width": 98,
                "height": 91
            },
            {
                "x": 62,
                "y": 4,
                "width": 23,
                "height": 50
            }
        ],
        "skillNames": [
            "",
            "맹독",
            "잎날가르기",
            "솔라빔"
        ],
        "bullet": {
            "phase1": {
                "name": "맹독",
                "width": 50,
                "height": 50,
                "speed": 2,
                "accel": 0,
                "delay": 0,
                "interval": 190,
                "damage" : 5,
                "src": "./img/bullet/venusaur_phase1.png",
                "hitBox": [
                    {
                        "x": 6,
                        "y": 10,
                        "width": 37,
                        "height": 32
                    }
                ]
            },
            "phase2": {
                "name": "잎날가르기",
                "width": 80,
                "height": 30,
                "speed": 5,
                "accel": 0,
                "delay": 0,
                "interval": 250,
                "damage" : 2,
                "src": "./img/bullet/venusaur_phase2.png",
                "hitBox": [
                    {
                        "x": 14,
                        "y": 4,
                        "width": 51,
                        "height": 13
                    },
                    {
                        "x": 14,
                        "y": 17,
                        "width": 41,
                        "height": 8
                    }
                ]
            },
            "phase3": {
                "name": "솔라빔",
                "width": 300,
                "height": 300,
                "speed": 1,
                "accel": 0.01,
                "delay": 100,
                "interval": 500,
                "damage" : 3,
                "src": "./img/bullet/venusaur_phase3.png",
                "hitBox": [
                    {
                        "x": 125,
                        "y": 125,
                        "width": 50,
                        "height": 50
                    }
                ]
            }
        }
    },

    "stage3Boss":
    {
        "x": 700,
        "y": 200,
        "width": 150,
        "height": 150,
        "src": "./img/char/blastoise.gif",
        "stage": 3,
        "name": "거북왕",
        "life": 200,
        "maxSpeed": 30,
        "hitBox": [
            {
                "x": 50,
                "y": 4,
                "width": 40,
                "height": 141
            }
        ],
        "skillNames": [
            "",
            "얼음펀치",
            "스톤샤워",
            "하이드로펌프"
        ],
        "bullet": {
            "phase1": {
                "name": "얼음펀치",
                "width": 150,
                "height": 50,
                "speed": 2,
                "accel": 0,
                "delay": 0,
                "interval": 180,
                "damage" : 5,
                "src": "./img/bullet/blastoise_phase1.png",
                "hitBox": [
                    {
                        "x": 2,
                        "y": 20,
                        "width": 10,
                        "height": 10
                    },
                    {
                        "x": 12,
                        "y": 10,
                        "width": 10,
                        "height": 29
                    },
                    {
                        "x": 22,
                        "y": 3,
                        "width": 112,
                        "height": 40
                    },

                ]
            },
            "phase2": {
                "name": "스톤샤워",
                "width": 75,
                "height": 75,
                "speed": 2,
                "accel": 0.01,
                "delay": 150,
                "interval": 50,
                "damage" : 7,
                "src": "./img/bullet/blastoise_phase2.png",
                "hitBox": [
                    {
                        "x": 1,
                        "y": 57,
                        "width": 73,
                        "height": 7
                    },
                    {
                        "x": 37,
                        "y": 1,
                        "width": 13,
                        "height": 55
                    }
                ]
            },
            "phase3": {
                "name": "하이드로범프",
                "width": 60,
                "height": 60,
                "speed": 1,
                "accel": 0.02,
                "delay": 100,
                "interval": 300,
                "damage" : 3,
                "src": "./img/bullet/blastoise_phase3.png",
                "hitBox": [
                    {
                        "x": 17,
                        "y": 16,
                        "width": 27,
                        "height": 30
                    }
                ]
            }
        }
    },

    "stage4Boss":
    {
        "x": 700,
        "y": 200,
        "width": 150,
        "height": 150,
        "src": "./img/char/lizarmon.gif",
        "stage": 4,
        "name": "리자몽",
        "life": 250,
        "maxSpeed": 35,
        "hitBox": [
            {
                "x": 32,
                "y": 63,
                "width": 16,
                "height": 33
            },
            {
                "x": 48,
                "y": 77,
                "width": 30,
                "height": 52
            }
        ],
        "skillNames": [
            "",
            "불꽃세례",
            "불대문자",
            "불꽃회오리"
        ],
        "bullet": {
            "phase1": {
                "name": "불꽃세례",
                "width": 50,
                "height": 50,
                "speed": 2,
                "accel": 0.005,
                "delay": 0,
                "interval": 170,
                "damage" : 5,
                "src": "./img/bullet/lizarmon_phase1.gif",
                "hitBox": [
                    {
                        "x": 11,
                        "y": 12,
                        "width": 27,
                        "height": 26
                    }
                ]
            },
            "phase2": {
                "name": "불대문자",
                "width": 50,
                "height": 50,
                "speed": 2,
                "accel": 0.02,
                "delay": 150,
                "interval": 150,
                "damage" : 3,
                "src": "./img/bullet/lizarmon_phase1.gif",
                "hitBox": [
                    {
                        "x": 11,
                        "y": 12,
                        "width": 27,
                        "height": 26
                    }
                ]
            },
            "phase3": {
                "name": "불꽃회오리",
                "width": 50,
                "height": 50,
                "speed": 2,
                "accel": 0,
                "delay": 0,
                "interval": 10,
                "damage" : 1,
                "src": "./img/bullet/lizarmon_phase1.gif",
                "hitBox": [
                    {
                        "x": 11,
                        "y": 12,
                        "width": 27,
                        "height": 26
                    }
                ]
            }
        }
    },

    "stage5Boss":
    {
        "x": 700,
        "y": 200,
        "width": 150,
        "height": 150,
        "src": "./img/char/dragonite.gif",
        "stage": 5,
        "name": "망나뇽",
        "life": 300,
        "maxSpeed": 40,
        "hitBox": [
            {
                "x": 41,
                "y": 16,
                "width": 33,
                "height": 122
            }
        ],
        "skillNames": [
            "",
            "용의숨결",
            "회오리",
            "파괴광선"
        ],
        "bullet": {
            "phase1": {
                "name": "용의숨결",
                "width": 60,
                "height": 40,
                "speed": 2,
                "accel": 0,
                "delay": 0,
                "interval": 160,
                "damage" : 5,
                "src": "./img/bullet/dragonite_phase1.png",
                "hitBox": [
                    {
                        "x": 6,
                        "y": 7,
                        "width": 27,
                        "height": 27
                    }
                ]
            },
            "phase2": {
                "name": "회오리",
                "width": 150,
                "height": 750,
                "speed": 0.5,
                "accel": 0.01,
                "delay": 200,
                "interval": 475,
                "damage" : 10,
                "src": "./img/bullet/dragonite_phase2.gif",
                "hitBox": [
                    {
                        "x": 52,
                        "y": 0,
                        "width": 44,
                        "height": 745
                    },
                    {
                        "x": 33,
                        "y": 0,
                        "width": 80,
                        "height": 143
                    },
                    {
                        "x": 19,
                        "y": 0,
                        "width": 114,
                        "height": 50
                    }
                ]
            },
            "phase3": {
                "name": "파괴광선",
                "width": 500,
                "height": 500,
                "speed": 0,
                "accel": 0.02,
                "delay": 120,
                "interval": 800,
                "damage" : 20,
                "src": "./img/bullet/dragonite_phase3.png",
                "hitBox": [
                    {
                        "x": 28,
                        "y": 428,
                        "width": 45,
                        "height": 45
                    },
                    {
                        "x": 71,
                        "y": 384,
                        "width": 45,
                        "height": 45
                    },
                    {
                        "x": 117,
                        "y": 340,
                        "width": 45,
                        "height": 45
                    },
                    {
                        "x": 161,
                        "y": 293,
                        "width": 45,
                        "height": 45
                    },
                    {
                        "x": 206,
                        "y": 250,
                        "width": 45,
                        "height": 45
                    },
                    {
                        "x": 250,
                        "y": 210,
                        "width": 45,
                        "height": 45
                    },
                    {
                        "x": 294,
                        "y": 165,
                        "width": 45,
                        "height": 45
                    },
                    {
                        "x": 339,
                        "y": 117,
                        "width": 45,
                        "height": 45
                    },
                    {
                        "x": 386,
                        "y": 70,
                        "width": 45,
                        "height": 45
                    },
                    {
                        "x": 431,
                        "y": 26,
                        "width": 45,
                        "height": 45
                    }
                ]
            }
        }
    },

    "stage6Boss":
    {
        "x": 700,
        "y": 200,
        "width": 100,
        "height": 100,
        "src": "./img/char/pikachu.gif",
        "stage": 6,
        "name": "피카츄",
        "life": 400,
        "maxSpeed": 50,
        "hitBox": [
            {
                "x": 10,
                "y": 26,
                "width": 39,
                "height": 69
            }
        ],
        "skillNames": [
            "",
            "전기쇼크",
            "전광석화",
            "번개"
        ],
        "bullet": {
            "phase1": {
                "name": "전기쇼크",
                "width": 40,
                "height": 40,
                "speed": 2,
                "accel": 0,
                "delay": 0,
                "interval": 150,
                "damage" : 5,
                "src": "./img/bullet/pikachu_phase1.gif",
                "hitBox": [
                    {
                        "x": 7,
                        "y": 5,
                        "width": 26,
                        "height": 31
                    }
                ]
            },
            "phase2": {
                "name": "전광석화",
                "width": 80,
                "height": 80,
                "speed": 3,
                "accel": 0,
                "delay": 50,
                "interval": 300,
                "damage" : 10,
                "src": "./img/bullet/pikachu_phase2.gif",
                "hitBox": [
                    {
                        "x": 20,
                        "y": 24,
                        "width": 33,
                        "height": 46
                    }
                ]
            },
            "phase3": {
                "name": "번개",
                "width": 35,
                "height": 100,
                "speed": 1,
                "accel": 0.025,
                "delay": 20,
                "interval": 40,
                "damage" : 10,
                "src": "./img/bullet/pikachu_phase3.png",
                "hitBox": [
                    {
                        "x": 9,
                        "y": 0,
                        "width": 13,
                        "height": 70
                    },
                    {
                        "x": 3,
                        "y": 30,
                        "width": 6,
                        "height": 10
                    },
                    {
                        "x": 22,
                        "y": 16,
                        "width": 12,
                        "height": 38
                    },
                    {
                        "x": 13,
                        "y": 70,
                        "width": 7,
                        "height": 13
                    }
                ]
            }
        }
    }

}