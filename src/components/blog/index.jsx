import React from 'react';

//Compoents
import BlogsCQ from './components//blog/blogsCQ';
import NavCQ from './components/nav/index';

//Data
import {data} from './data';

function Blog() {
    return(
        <>
            <NavCQ imgUrl="/" links={[]} imgAlt="tracsa"/>
            <BlogsCQ title="Artículos" blogs={data}/>
            {/* <iframe title="tracsa block;" scrolling="auto" src="https://tracsa-tracbras.blogspot.com/" frameborder="0" height="1024" width="100%"></iframe> */}
        </>
    );
}

export default Blog;