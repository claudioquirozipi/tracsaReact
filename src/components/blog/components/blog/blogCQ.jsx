import React from 'react';

//Assets
import {
    TitleBlog,
    BlogContainer
} from './styled';

function BlogCQ(props) {
    const {titleH1} = props;
    return(
        <>
        <TitleBlog >{titleH1}</TitleBlog>
        <BlogContainer>
            {props.children}
        </BlogContainer>
        </>
    )
}

export default BlogCQ;