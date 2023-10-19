import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled'


// =========================== Example 1 =========================== //
const color = 'white';

const Button = styled.button`
    padding: 32px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    color: black;
    font-weight: bold;
    &:hover {
        color: white;
}`;

// =========================== Example 2 =========================== //
const style = css`
    color: hotpink;
`;

const SomeComponent = ({ children }) => (
    <div css={style}>
        Some hotpink text.
        {children}
    </div>
);

const anotherStyle = css({
    textDecoration: 'underline'
});

const AnotherComponent = () => (
    <div css={anotherStyle}>Some text with an underline.</div>
);


// =========================== Example 3 =========================== //

const Button2 = styled.button`
    color: hotpink;
`;



export default function EmotionExam1() {
    /* << Emotion >> 
        - css 함수 지원 : style 속성과 유사. Javascript를 사용하여 style을 정의할 수 있음. (@emotion/react 패키지 내부)
        - 동적 스타일 : css 함수 내에서 Javascript 표현식을 사용하여 동적 스타일으 사용할 수 있음.(아래의 color가 예시)

        - ㄴ쇼ㅣㄷ gkatn wldnjs
     */
    return (
        <>
            {/* 첫 번째 css가 css 함수, 두 번째 css가 템플릿 리터럴 문자열(내장 표현식) */}
            <div    
                css={css`
                    padding: 32px;
                    background-color: hotpink;
                    font-size: 24px;
                    border-radius: 4px;
                    margin: 15px;
                    &:hover {
                    color: ${color};
                    }
                `}
            >
                Hover to change color.
            </div>
            <Button>This my button component.</Button>

            <br/>

            {/* SomeComponent의 스타일을 상속받은 AnotherComponent 사용 */}
            <SomeComponent>
                <AnotherComponent/>
            </SomeComponent>
            <br/>
            <Button2 children="This is a hotpink button."/>
        </>
    )
}
