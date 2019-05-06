# 게임 화면
<img src="https://postfiles.pstatic.net/MjAxOTA1MDZfMjkw/MDAxNTU3MTM3MjIwNzQ3.c_zB8XpIk4YXzssp4rkKbOzVtAEiyi8F0MJnJFPTXigg.B7eHf4CQyS3mLerVyMYIeulva_P3Ydo1SZgTQv8PiAMg.PNG.younggu1545/2.png?type=w966"/>
<ul>
  <li>게임화면과 상태창으로 분리</li>
  <li> 게임화면
     <ul>
       <li>게임 진행되는 화면</li>
       <li>상단에 보스 캐릭터이름 및 체력 게이지, 스킬명 표시</li>
       <li>키 입력으로 캐릭터 이동 및 공격, 보스 캐릭터는 자동으로 이동</li>
       <li>각 보스별 페이즈마다 서로 다른 공격 패턴 보여지도록 개발</li>
       <li>탄환은 경우 적에게 닿거나 화면 밖으로 나갈 시 제거</li>
     </ul>
  </li>
  <li> 상태창
     <ol>
       <li>게임 진행에 필요한 정보 표시</li>
       <li>적 탄환에 닿을 시 Life 줄어듬</li>
       <li>탄환이 적 보스에게 닿을 시 score 증가</li>
       <li>필살기(PP) 사용시 일정 주기마다 사용 가능</li>
     </ol>
  </li>
</ul>

# 클래스 다이어그램
<img src="https://postfiles.pstatic.net/MjAxOTA1MDZfMjkg/MDAxNTU3MTM3MjIwNjUw.stm4jcm1EpBkc52avxiqHYegC4AXFAoPBCxmjzr8TNgg.TDSMJUXPjd828FZJS55hPWeF--SGiR2OXlBBGcHLMM4g.PNG.younggu1545/1.png?type=w966"/>
<ul>
  <li>게임내 클래스는 GameObject를 상속받아 생성</li>
  <li>오브젝트는 각각 PlayerChar, BossChar, Item, Bullet로 분리되어 있고 각각 상위 클래스를 상속받아 만들어짐</li>
  <li>ObjectManager에서 생성된 Object를 관리</li>
</ul>

# 데이터 처리
<img src="https://postfiles.pstatic.net/MjAxOTA1MDZfMjk3/MDAxNTU3MTM3MjIwNzE1.gjw35ctKVY2MJGW3m-JCi4xSv5PK9QNBiTgDJzRpQhEg.bXvXzTQRdisw76YAki8Ehvjk0sNnF0u5A0jofnWJD0og.PNG.younggu1545/3.png?type=w966"/>
<ul>
  <li>JSON 객체 파일 생성하여 캐릭터 및 보스 캐릭터 데이터 저장하여 처리</li>
  <li>캐릭터의 경우 초기 위치, 크기, 이동속도, 이미지경로, HitBox 배열을 저장</li>
  <li>탄환의 경우 종류별 크기, 속도, 가속도, 패턴 발생 지연시간, 이미지크기, 히트박스, 데미지 등을 저장</li>
  <li>캐릭터 및 탄환 생성 시 위의 정보를 가지고 생성될 수 있도록 개발</li>
</ul>

# 오브젝트 생성
<img src="https://postfiles.pstatic.net/MjAxOTA1MDZfMTMw/MDAxNTU3MTM3MjIwNzA4.SAt-yBuMhNwp4szoQj8_aLA5yk6Uhx__6a66-SJkRfEg.Dn8zA25QDI_dKVrSM7chYW6w-FijkY5V6eTVIfi61Isg.PNG.younggu1545/4.png?type=w966"/>
<ul>
  <li>입력받은 생성자를 통하여 오브젝트 생성</li>
  <li>json 객체 파일에 담긴 정보에서 가져와서 사용할 수 있도록 개발</li>
  <li>생성된 오브젝트는 DIV로 생성후 배경 이미지를 설정하여 표시</li>
  <li>json 객체의 HitBox 정보를 가져와 충돌 체크시 사용할 객체 생성</li>
</ul>

# 충돌체크
<img src="https://postfiles.pstatic.net/MjAxOTA1MDZfNjkg/MDAxNTU3MTM3MjIwNjUw.wMcAi3GBVBmB8H4qrH1lM87HGxn67gIP3NTfflWy1nUg.t8YBRHzhCAO-EBUyqSTOmhfX1kS3QiOv48Rqc7fMSREg.PNG.younggu1545/5.png?type=w966"/>
<ol>
  <li>자신 객체와 상대방 객체의 HitBox의 크기와, 각 객체 위치를 사용하여 충돌 체크 진행</li>
  <li>HitBox의 경우 Div내에 위치하기 때문에 현재 객체의 위치 + HitBox의 정보로 계산</li>
</ol>

# 움직임 처리
<img src="https://postfiles.pstatic.net/MjAxOTA1MDZfMjMg/MDAxNTU3MTM3MjIwNzM0.m_U_63ETXqGXF2rwzqxM6BQEXEB9DcVvUsXY4kQKapUg.2VAzeGnWiz-rJeYClyiNuojVH3HJeVb0Lt0Lm6X2xyIg.PNG.younggu1545/6.png?type=w966"/>
<ul>
  <li>Key 입력 이벤트를 통하여 키 누른 상태인지, 뗀 상태인지를 확인</li>
  <li>GameLoop에서 json 배열의 각 키값의 true/false 상태값을 체크하여 객체를 이동 시킴</li>
  <li>이동 혹은 공격 키 입력 중 다른 키 입력시 끊어지는 현상 방지 하기 위해 사용</li>
</ul>

# 보스 및 캐릭터 생성
<img src="https://postfiles.pstatic.net/MjAxOTA1MDZfMjMg/MDAxNTU3MTM3MjIwNzM0.m_U_63ETXqGXF2rwzqxM6BQEXEB9DcVvUsXY4kQKapUg.2VAzeGnWiz-rJeYClyiNuojVH3HJeVb0Lt0Lm6X2xyIg.PNG.younggu1545/6.png?type=w966"/>
<ul>
  <li>GameObject를 상속받아 움직임(tick)과 공격(attack)시 사용할 메서드 지정</li>
</ul>

<img src="https://postfiles.pstatic.net/MjAxOTA1MDZfMjY2/MDAxNTU3MTM3MjIwOTA2.bc3PlYrZp_z8ANukkZEW5_8qtMJ-3ZM6OmYR1PTEdVUg.DnhP11nyyIa-wUeXDN1HORcpQAD3UcsQKB6D97_VTz4g.PNG.younggu1545/8.png?type=w966"/>
<ul>
  <li>BossChar 클래스를 상속 받아, 공격 페이즈마다 별도의 </li>
</ul>
