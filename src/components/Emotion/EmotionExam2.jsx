import React from 'react'
/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

// =========================== Example 1 =========================== //
const P = props => (
    <p
        css={{
            margin: 0,
            fontSize: 12,
            lineHeight: '1.5',
            fontFamily: 'Sans-Serif',
            color: 'black'
        }}
        {...props}
    />
);

const ArticleText = props => (
    <P
        css={{
            fontSize: 15, 
            fontFamily: 'Georgia, serif',
            color: 'darkgray'
        }}
        {...props}
    />
);

const SmallArticleText = props => {
    return (
        <ArticleText
            css={{
                fontSize: 9,
                color: 'pink'
            }}
            {...props}
        />
    );
}

// =========================== Example 2 =========================== //

const Button = styled.button`
    color: turquoise;
    margin: 5px;
`;

// 기본 butotn을 상속받아 사용하는 법
// const Button2 = styled.Button`
//     color: ${props => (props.primary ? 'hotpink' : 'turquoise')};
// `;

// 내가 만든 커스텀 컴포넌트를 상속받아 사용하는법
const Button2 = styled(Button)`
    color: ${props => (props.primary ? 'hotpink' : 'turquoise')};
`;

const Container = styled.div(props => ({
    display: 'flex',
    flexDirection: props.column && 'column'
}));

// =========================== Example 3 =========================== //

const Basic = ({ className }) => <div className={className}>Some text</div>

const Fancy = styled(Basic)`
    color: hotpink;
`;
export default function EmotionExam2() {
    return (
        <>
            <div
                css={{
                    backgroundColor: "hotpink",
                    '&:hover' : {
                        color: 'lightgreen'
                    }
                }}>
                This has a hotpink background.
            </div>

            <br/>

            <P>P Style Tag</P>
            <ArticleText>ArticleText</ArticleText>
            <SmallArticleText>Small Article Text</SmallArticleText>

            <br/>

            <Button>This my button button.</Button>
            <br/>
            <Container column>
                <Button2>This is a regular button.</Button2>
                <Button2 primary>This is a primary button.</Button2>
            </Container>

            <br/>

            <Fancy/>
        </>
    )
}
