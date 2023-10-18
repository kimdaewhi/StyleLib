import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled'


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

export default function EmotionExam1() {

    return (
        <>
            {/* 이건 왜 안되지... 나중에 파악해보기 */}
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
        </>
    )
}
