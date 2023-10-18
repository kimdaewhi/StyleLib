import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;

    /* Color the border and text with theme.main */
    color: ${props => props.theme.main};
    border: 2px solid ${props => props.theme.main};
`;

// 위에서 정의한 Button의 기본 테마를 설정한다. (보라색 같은 자홍색)
Button.defaultProps = {
    theme: {
    main: "#BF4F74",
    }
}

// 새로운 테마를 정의한다. Props에 추가하고 싶은 속성이 있으면 계속 확장해서 사용 가능.
const theme = {
    main: "mediumseagreen",
};


/* [함수형 테마 ]
 * 부모 테마에서 커스텀 테마를 지정할 수 있다.
 * 부모 테마의 하위 테마(자식 테마)에서 상속받은 부모의 테마에 override해서 사용할 수 있다.
 */

const Button2 = styled.button`
    color: ${props => props.theme.fg};
    border: 2px solid ${props => props.theme.fg};
    background: ${props => props.theme.bg};
    cursor: pointer;

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
`;

// Define our `fg` and `bg` on the theme
const theme2 = {
    fg: "#BF4F74",
    bg: "white"
};

// This theme swaps `fg` and `bg`
const invertedTheme = ({ fg, bg }) => ({
    fg: bg,
    bg: fg
});


export default function StyledComponentsExam4() {

    return (
        <>
            <Button>Normal</Button>     {/* defualt Theme가 적용된다. */}

            {/* ThemeProvider로 감싼 Button은 위에서 정의한 theme가 적용되어 보인다.(초록색) */}
            <ThemeProvider theme={theme}>
                <Button>Themed</Button>
            </ThemeProvider>

            <hr/>

            {/* 부모 테마를 받아서 override 해서 사용할 수도 있다. 상위 부모 테마는 theme2이지만 하위 ThemeProvider에서 invertedTheme로 override 하고 있다. */}
            <ThemeProvider theme={theme2}>
                <div>
                    <Button2>Default Button</Button2>

                    <ThemeProvider theme={invertedTheme}>
                        <Button2>Interted Button</Button2>
                    </ThemeProvider>
                </div>
            </ThemeProvider>
        </>
    )
}
