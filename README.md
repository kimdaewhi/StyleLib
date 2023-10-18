# React Style 라이브러리 실습

1. Styled-Components
  * javascript 방식으로 스타일 지정 및 컴포넌트 생성.
  * 키워드
    + `&` : 자기 자신을 의미
    + `& + &` : 자기 자신의 바로 옆에 있는 태그(css의 selector와 유사한 기능)
    + `&.className` : className을 먹인 친구에게 스타일 먹이기
    + `.className &` : className을 먹인 기본 component 내부의 자기 자신 태그
    + `& ~ &` : 태그 옆에 있는 태그에게 스타일 부여.
