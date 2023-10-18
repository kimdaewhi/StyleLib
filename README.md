# React Style 라이브러리 실습

## 1. Styled-Components
  * `npm install styled-components` 로 설치.
  * **javascript 방식**으로 스타일 지정 및 컴포넌트 생성.
  * className이 겹치지 않게 styled components 패키지가 알아서 고유 ID를 지정해줌.
  * 키워드
    + `&` : 자기 자신을 의미
    + `& + &` : 자기 자신의 바로 옆에 있는 태그(css의 selector와 유사한 기능)
    + `&.className` : className을 먹인 친구에게 스타일 먹이기
    + `.className &` : className을 먹인 기본 component 내부의 자기 자신 태그
    + `& ~ &` : 태그 옆에 있는 태그에게 스타일 부여.
  * 새로운 컴포넌트 생성 및 컴포넌트를 상속 및 확장하여 사용 가능.(StyledComponentsExam3.jsx 참고)
  * 커스텀 태그를 ThemeProvider 태그로 감싸서 테마 확장이 가능하다. (StyledComponentsExam4.jsx 참고)
  * 함수형 테마를 이용해서 부모(전역) 테마를 override해서 자식 테마에서 사용할 수 있다. (StyledComponentsExam4.jsx - 함수형 테마 참고)


## 2. Emotion
* `npm i @emotion/react` 로 설치. (기본은 `npm i @emotion/css`)
* 역시 **javascript 방식**으로 스타일 지정 및 컴포넌트 생성.
* **styled components와의 차이**
  - emotion은 css-in-js 라이브러리 중 **번들 크기가 작은 특징을 지님.**(즉 성능 면에서 뛰어남.)
  - styled-components는 Javascript 템플릿 리터럴을 사용해서 스타일을 정의하는 방법으로, 컴포넌트 자체가 **스타일과 관련된 코드를 포함한다.**
  - Emotion은 **객체 형식의 스타일을 사용하는 접근 방식과 css 템플릿 리터럴을 사용하는 두 가지 방식을 모두 지원함.**
* **@emotion css 에러 발생 시 해결방법**
  - Error message : **You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).**
  - emotion/css를 사용할 때 css에 전달하는 객체가 문자열로 변환해서 전달되야 하는데 그대로 전달되서 발생하는 문제...
  - 이를 해결하기 위해서 babel 설정이 필요한데, 설정이 안되어 있을 가능성이 크다. json 설정 파일에 다음 내용을 추가하자.
    ```json
    {
      "presets": [
        [
          "@babel/preset-react",
          { "runtime": "automatic", "importSource": "@emotion/react" }
        ]
      ],
      "plugins": ["@emotion/babel-plugin"]
    }
    ```
  - 또는 간단히 해결하고 싶을 때는 최상단에 ```/** @jsxImportSource @emotion/react */``` 를 추가하자
