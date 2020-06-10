import React from 'react';
import {Link} from 'gatsby';
import './Post.css';
import Img from 'gatsby-image';

const Post = ({title, author, path, date, body, fluid}) => {
    return(
        <div>
            <Img fluid = {fluid}/>
            <div className = "post_wrapper">
                
                <h4 className = "title">
                    {title}
                </h4>
                <p className = "date">{date} </p>
                <p className = "author">{author} </p>
             <Link to={path}>Read more</Link>
            </div>
            
           
        </div>
    )
}

export default Post