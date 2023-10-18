import React from 'react'
import styled, { keyframes } from 'styled-components'

const Input = styled.input.attrs(props => ({
        type: 'text',
        $size: props.$size || '1em',        // props.size 있으면 props.size로 지정, 그렇지 않으면 1em으로 지정
    }))`
	border: 2px solid #bf4f74;
	margin: ${(props) => props.$size};
	padding: ${(props) => props.$size};
`;

// Input's attrs will be applied first, and then this attrs obj
const PasswordInput = styled(Input).attrs({     // Input이라는 Custom component를 확장해서 사용 가능함. 하지만 border를 override 하고있음.
    type: "password",
    })`
        // similarly, border will override Input's border
        border: 2px solid aqua;
    `;


// Create the keyframes
const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
`;


export default function StyledComponentsExam3() {
    return (
        <div>
            <Input placeholder="A bigger text input" $size="2em" />
            <br />
            {/* Notice we can still use the size attr from Input */}
            <PasswordInput placeholder="A bigger password input" $size="2em" />

            <hr/>

            <Rotate>&lt;💅🏾 &gt;</Rotate>
        </div>


    )
}
