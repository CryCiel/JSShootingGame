/*
사용법 : getRandom 호출 시 당신이 원하는 수를 넣으세요
		ex) getRandom(5) 를 넣으면 0~4를 반환
*/
function getRandom(num) {
	var r = Math.random();
	var n = parseInt(r * num);
	return n;	// 함수 중 return에 값을 명시하여, 호출한 자가 그 값을 반환받고록 처리하는 함수를
	// 리턴값 있는 함수, 반환값이 있는 함수라 한다.
}

// ex) 2,7 --> 2~6까지의 수가 나온다
function getRandomByRange(min, max) {
	return parseInt(Math.random() * (max - min)) + min;
}

// 히트박스 배열로 입력받음
function collisionCheck(me, target) {
	var count = 0;

	// 자신의 히트박스와 상대방의 히트박스를 전부 비교
	for (i = 0; i < me.hitBox.length; i++) {
		for (j = 0; j < target.hitBox.length; j++) {
			if (me.x + me.hitBox[i].x + me.hitBox[i].width >= target.x + target.hitBox[j].x &&	// 우측 / 좌측 비교
				me.x + me.hitBox[i].x <= target.x + target.hitBox[j].x + target.hitBox[j].width && // 좌측 / 우측 비교
				me.y + me.hitBox[i].y + me.hitBox[i].height >= target.y +  target.hitBox[j].y && 	// 상단 / 하단 비교
				me.y + me.hitBox[i].y <= target.y + target.hitBox[j].y + target.hitBox[j].height) {	// 하단 / 상단 비교
				count++;
			}
		}
	}
	return (count > 0);
}