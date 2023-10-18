import React from 'react'
import styled from 'styled-components'

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #BF4F74;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`;

const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => props.$primary ? "#BF4F74" : "white"};
    color: ${props => props.$primary ? "white" : "#BF4F74"};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #BF4F74;
    border-radius: 3px;
`;

// 위에서 선언한 Button 상속
const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
`;

const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()} />



export default function StyledComponentsExam1() {
    /* styled Component
    - javscript 코드 내에서 css 작성 가능
    - 컴포넌트 수준에서 스타일을 정의할 수 있음. 즉, 컴포넌트 생성과 동시에 스타일을 정의할 수 잇다.
    - 컴포넌트의 className은 styled component가 알아서 정의해준다.(고유 ID를 알아서 만들어준다.)
    - 생성해 놓은 컴포넌트를 as 태그를 통해 다른 컴포넌트로 상속 및 확장이 가능하다.
    - ⭐ 컴포넌트 생성은 render method 외부에서의 선언을 (매우매우)권장한다.
    */


// Use Title and Wrapper like any other React component – except they're styled!
    return (
        <>
            <Wrapper>
                <Title>Hello World!</Title>
            </Wrapper>

            <Button onClick={() => alert("normal")}>Normal</Button>
            <Button onClick={() => alert("primary")} $primary>Primary</Button>
            <TomatoButton>Tomato</TomatoButton>

            <br/>
            
            {/* 실제로 실행시켜서 component를 확인해보면 button이나 tomatobutton이 아닌 a태그로 변경되어잇음! */}
            <Button as="a" href="#">Link with Button styles</Button>
            <TomatoButton as="a" href="#">Link with Tomato Button styles</TomatoButton>
            <Button as="div">div로 확장하기</Button>

            <br/>

            <Button>Normal Button</Button>
            <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
        </>

    );
}