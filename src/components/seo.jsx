import React from 'react';
import MetaTags from 'react-meta-tags';
import img from '../img/quienes.png';


function Seo(props) {
    const {title, description, keywords} = props;
    return(
        <MetaTags> 
            {/* Title */}
            <title>{title}</title>
            <meta name="twitter:title" content={title} />
            <meta property="og:title" content={title} />
            {/* description */}
            <meta id="meta-description" name="description" content={description} />
            <meta name="twitter:description" content={description} />
            <meta property="og:description" content={description} />
            {/* image */}
            <meta id="og-image" property="og:image" content={img} />
            <meta name="twitter:image" content={img}/>
            {/* others */}            
            <meta name="keywords" content=" correas, resistencia, video, alta, correas de pvc, Correas goma, revestimientos para caño, Empalmes, Cangilones, Dauer, Velta, Granos, Acopios, Silos, Puertos, Tracsa" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="" />
            <meta property="og:url" content="" />
            <meta property="og:type" content="article" />
        </MetaTags>
    );
}
export default Seo;