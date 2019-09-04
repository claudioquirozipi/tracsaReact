import React from 'react';
import {Link} from 'react-router-dom';
// Styled-Components
import {
    BlogsContainer,
    TitleBlog
} from './styled';

function BlogsCQ(props) {
    const {blogs, title, bgLink} = props;
    return(
        <>
            <TitleBlog>{title}</TitleBlog>
            <BlogsContainer bgLink={bgLink}>
                {blogs.map((blog, i) => {
                    return(
                        <div key={i}>
                            <img src={blog.img} alt=""/>
                            <h2>{blog.title}</h2>
                            <p>{blog.text}</p>
                            <Link to={blog.url}>Go to</Link>
                        </div>
                    )})
                }
                
            </BlogsContainer>
        </>
    )
}

export default BlogsCQ;