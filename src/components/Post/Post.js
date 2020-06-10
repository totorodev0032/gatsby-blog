import React from 'react';
import {Link} from 'gatsby';
import './Post.css';
import Img from 'gatsby-image';
import {slugify} from '../../util/UtilityFunctions'

const Post = ({title, author, slug, date, body, fluid, tags}) => {
    return(
        <div>
            <Img fluid = {fluid}/>
            <div className = "post_wrapper">
                
                <h4 className = "title">
                    {title}
                </h4>
                <p className = "date">{date} </p>
                <p className = "author">{author} </p>
                <p>{body}</p>
                <p>
                    {
                        tags.map(tag => (
                            <li>
                                <Link to = {`/tag/${slugify(tag)}`}>
                                    {tag}
                                </Link>
                            </li>
                        ))
                    }
                </p>
             <Link to={slug}>Read more</Link>
            </div>
            
           
        </div>
    )
}

export default Post