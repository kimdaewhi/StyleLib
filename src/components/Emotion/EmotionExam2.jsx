import React from 'react'
/** @jsxImportSource @emotion/react */

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
        </>
    )
}
