# React Style 라이브러리 실습

## 1. Styled-Components
  * javascript 방식으로 스타일 지정 및 컴포넌트 생성.
  * 키워드
    + `&` : 자기 자신을 의미
    + `& + &` : 자기 자신의 바로 옆에 있는 태그(css의 selector와 유사한 기능)
    + `&.className` : className을 먹인 친구에게 스타일 먹이기
    + `.className &` : className을 먹인 기본 component 내부의 자기 자신 태그
    + `& ~ &` : 태그 옆에 있는 태그에게 스타일 부여.
  * 새로운 컴포넌트 생성 및 컴포넌트를 상속 및 확장하여 사용 가능.(StyledComponentsExam3.jsx 참고)
  * 커스텀 태그를 ThemeProvider 태그로 감싸서 테마 확장이 가능하다. (StyledComponentsExam4.jsx 참고)
  * 함수형 테마를 이용해서 부모(전역) 테마를 override해서 자식 테마에서 사용할 수 있다. (StyledComponentsExam4.jsx - 함수형 테마 참고)
